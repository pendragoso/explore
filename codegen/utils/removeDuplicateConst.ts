const replaceString = ({
  endIndex,
  replacement,
  startIndex,
  str,
}: {
  endIndex: number;
  replacement: string;
  startIndex: number;
  str: string;
}) => {
  // Extract the parts of the original string before and after the substring
  const before = str.slice(0, startIndex);
  const after = str.slice(endIndex);

  // Concatenate the parts with the replacement substring
  return before + replacement + after;
};

export const removeDuplicateConst = (text: string) => {
  let newText = text;
  /** Frontend constant and type pair that is duplicated */
  const pairArray: { constKey: string; typeKey: string }[] = [
    {
      constKey: 'cursorOrdering',
      typeKey: 'CursorOrdering',
    },
    {
      constKey: 'orderBy',
      typeKey: 'OrderBy',
    },
  ];
  // match all duplicate export from hasura codegen
  const commentRe = `(\\/\\*([^\\/]|\n)+\\*\\/\n)*`;
  // match all duplicate export from hasura codegen
  pairArray.forEach(({ constKey, typeKey }) => {
    // regex to get all of the defined const in hasura
    const cursorOrderingConstRe = new RegExp(
      `${commentRe}export const ${constKey} = {[\\s\\S]+?} as const;`,
      'gm'
    );
    // regex to get all of the defined type in hasura
    const cursorOrderingTypeRe = new RegExp(
      `${commentRe}export type ${typeKey} =[\\s\\S]+?;`,
      'gm'
    );

    /** Process constant */
    const _constMatchArr = newText.matchAll(cursorOrderingConstRe);
    const constMatch = Array.from(_constMatchArr);
    constMatch.forEach((m, index) => {
      if (m.index === undefined) return;
      // skip first match
      if (index > 0) {
        const endIndex = m.index + m[0].length;
        const inputLength = m[0].length;
        newText = replaceString({
          endIndex,
          replacement: ' '.repeat(inputLength),
          startIndex: m.index,
          str: newText,
        });
      }
    });

    /** Process type */
    const _typeMatchArr = newText.matchAll(cursorOrderingTypeRe);
    // skip first match
    const typeMatch = Array.from(_typeMatchArr);
    typeMatch.forEach((m, index) => {
      if (m.index === undefined) return;
      // skip first match
      if (index > 0) {
        const endIndex = m.index + m[0].length;
        const inputLength = m[0].length;
        newText = replaceString({
          endIndex,
          replacement: ' '.repeat(inputLength),
          startIndex: m.index,
          str: newText,
        });
      }
    });
  });
  return newText;
};
