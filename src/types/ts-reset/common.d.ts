// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/naming-convention
interface ObjectConstructor {
  keys<T extends Record<string, unknown>>(o: T): (keyof T)[];
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/naming-convention
interface JSON {
  parse<T = unknown>(text: string): T;
}
