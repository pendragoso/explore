// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/naming-convention
interface Body {
  json<T = unknown>(): Promise<T>;
}
