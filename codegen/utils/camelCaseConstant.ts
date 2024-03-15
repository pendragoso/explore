import camelCase from 'lodash/camelCase';

export const camelCaseConstant = (content: string) =>
  content
    .replace(
      /export const (?<variable>[\w]+) = (?<bracket>[{[])/g,
      (_match, variable, bracket) =>
        `export const ${camelCase(variable)} = ${bracket}`
    )
    .replace(
      /typeof (?<variable>[\w]+)/g,
      (_match, variable) => `typeof ${camelCase(variable)}`
    );
