import type { IJsonError, INoInfer } from 'src/types';
import { storybookEnv } from 'src/utils/environment';

import { getCookie } from './getCookie';

export const handleAbsolutePath = (url: string) => {
  if (url[0] !== '/') {
    throw Error(`URL is not an absolute path: "${url}"`);
  }
};

export const getStorybookUrl = () => {
  const storybookUrl = storybookEnv.STORYBOOK_EXPLORE_URL;
  if (storybookUrl) {
    return storybookUrl;
  }
  return null;
};

export const getStorybookHeaders = ({
  headers,
  url,
}: {
  headers?: HeadersInit;
  url: string;
}) => ({
  ...headers,
  // Static files (public folder) should not have authorization header as it will trigger CORS preflight which breaks everything
  // Match all API calls
  ...(url.match(/.*\/api\/.*/) && {
    authorization: getCookie('IGuser') || '',
  }),
});

/** Allow only graphQl doing `query` but not `mutation` */
const anyGraphQlQueryMatches = ({
  options,
  url,
}: {
  options?: RequestInit;
  url: string;
}) => {
  const isGraphQl = /^\/api\/graphql\//.test(url);
  const body = options?.body;

  if (isGraphQl && typeof body === 'string') {
    /** check if the query have `mutation` in it or not */
    const hasMutation = /mutation/gm.test(body);
    return !hasMutation;
  }

  return false;
};

export const request = (url: string, _options?: RequestInit) => {
  handleAbsolutePath(url);
  const storybookUrl = getStorybookUrl();
  if (storybookUrl) {
    const options: RequestInit = {
      method: 'GET',
      ..._options,
      headers: getStorybookHeaders({ headers: _options?.headers, url }),
    };
    if (
      options.method === 'GET' ||
      anyGraphQlQueryMatches({ options: _options, url })
    ) {
      return fetch(`${storybookUrl}${url}`, options);
    }
    return null;
  }
  return fetch(url, _options);
};

export type IRequestOptions<TResponseBody, TRequestBody> = {
  body?: INoInfer<TRequestBody>;
  pollUntil?: boolean;
  shouldReportError?: boolean;
  testExpectedData?: (data: TResponseBody) => boolean;
} & Omit<RequestInit, 'body'>;

type IHandleFetchArgs<
  TResponseBody extends unknown,
  TRequestBody = unknown
> = readonly [string, IRequestOptions<TResponseBody, TRequestBody>?];

const getProxyResponseBody = async <TResponseBody extends unknown>(
  response: Response
) => {
  const json = await response.json<TResponseBody>();
  return json;
};

const handleFetch = async <
  TResponseBody extends unknown,
  TRequestBody = unknown
>([url, options]: IHandleFetchArgs<TResponseBody, TRequestBody>): Promise<{
  errors: IJsonError[];
  json: TResponseBody | null;
  response: Response | null;
}> => {
  const { ...opts } = options || {};
  let response: Response | null = null;

  const body = opts.body && JSON.stringify(opts.body);
  try {
    response = await request(url, { ...opts, body });
  } catch (e) {
    /** @todo check what type of error this is
     * https://fettblog.eu/typescript-typing-catch-clauses/
     */
    if (e instanceof Error && e.name === 'AbortError') {
      // Request aborted
    } else {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  if (response?.ok) {
    if (response.status === 204) {
      return { errors: [], json: null, response };
    }

    const json = await getProxyResponseBody<TResponseBody>(response);

    if (json && options?.testExpectedData && !options.testExpectedData(json)) {
      if (options.pollUntil) {
        return {
          errors: [
            { message: 'Desired value does not exist', type: 'pollUntil' },
          ],
          json: null,
          response,
        };
      }
      return {
        errors: [{ message: 'Failed data', type: 'failedData' }],
        json: null,
        response,
      };
    }

    return { errors: [], json, response };
  }

  const errors: IJsonError[] = [];

  return { errors, json: null, response };
};

/** @desc https://swr.vercel.app/blog/swr-v2#fetcher-no-longer-accepts-multiple-arguments */
const normalizeArgs = <TResponseBody extends unknown, TRequestBody = unknown>(
  args: IHandleFetchArgs<TResponseBody, TRequestBody> | string
): IHandleFetchArgs<TResponseBody, TRequestBody> => {
  if (typeof args === 'string') {
    // Just URL
    return [args, undefined];
  }

  return args;
};

export const swrFetcher = async <
  TResponseBody extends unknown,
  TRequestBody = unknown
>(
  args: IHandleFetchArgs<TResponseBody, TRequestBody> | string
) => {
  const normalizedArgs = normalizeArgs(args);
  const { errors, json, response } = await handleFetch<
    TResponseBody,
    TRequestBody
  >(normalizedArgs);
  const firstError = errors.find(Boolean);
  if (
    !response?.ok ||
    ['pollUntil', 'failedData'].includes(firstError?.type || '')
  ) {
    // eslint-disable-next-line no-throw-literal
    throw { errors, status: response?.status };
  }
  return { json, response };
};
export const fetcher = swrFetcher;

export type IJsonRequestReturn<TResponseBody> = {
  errors: IJsonError[];
  json: INoInfer<TResponseBody> | null;
  response: Response | null;
};
/**
 * @desc A wrapper for request that stringifies the body & un-stringifies the response
 * @param `options.body` We require a generic type for `TRequestBody`
 * @example
 * const { data, errors, response } = await jsonRequest<ResponseData, TRequestBody>()
 * // data will always infer `null` without `ResponseData`
 * @returns
 * ```
 * interface IJsonRequestReturn {
 *   data: ResponseData | null;
 *   errors: IJsonError[];
 *   response: Response;
 * }
 * ```
 */
export const jsonRequest = async <
  TResponseBody = never,
  TRequestBody = unknown
>(
  ...args: IHandleFetchArgs<TResponseBody, TRequestBody>
): Promise<IJsonRequestReturn<TResponseBody>> => {
  const { errors, json, response } = await handleFetch(args);

  return { errors, json, response };
};
