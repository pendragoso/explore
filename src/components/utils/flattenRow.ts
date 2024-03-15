export const flattenRow = ({
  currentVal: [key, value],
  prev,
  previousKey = '',
}: {
  currentVal: [string, unknown];
  prev: Record<string, string>;
  previousKey?: string;
}): Record<string, unknown> => {
  const keyWithPrefix = previousKey ? `${previousKey}.${key}` : key;
  if (Array.isArray(value)) {
    return { ...prev, [key]: JSON.stringify(value) };
  }

  if (typeof value === 'object' && value) {
    // Flatten the object
    const nestedObj: Record<string, string> = Object.entries(value).reduce(
      (pre, [nestedKey, nestedVal]) => ({
        ...flattenRow({
          currentVal: [nestedKey, nestedVal],
          prev: pre,
          previousKey: previousKey ? `${previousKey}.${nestedKey}` : key,
        }),
      }),
      {}
    );

    return { ...prev, ...nestedObj };
  }
  if (typeof value === 'number') {
    return { ...prev, [keyWithPrefix]: value };
  }
  if (typeof value === 'boolean') {
    return { ...prev, [keyWithPrefix]: !!value };
  }
  if (!value) {
    return { ...prev, [keyWithPrefix]: '' };
  }
  return { ...prev, [keyWithPrefix]: `${value}` };
};
