export const jsonParse = <TDataType extends unknown>(data: string | null) => {
  if (data) {
    try {
      // eslint-disable-next-line no-restricted-syntax
      const json = JSON.parse<TDataType>(data);
      return json;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      return null;
    }
  }
  return null;
};
