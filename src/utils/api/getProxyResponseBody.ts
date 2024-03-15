export const getProxyResponseBody = async <TResponseBody extends unknown>(
  response: Response | null
) => {
  if (response) {
    const json = await response.json<TResponseBody>();
    return json;
  }
  return null;
};
