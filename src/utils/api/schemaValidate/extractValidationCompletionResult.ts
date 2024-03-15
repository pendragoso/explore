/**
 * Extract the validation result from the chat completion result.
 */
export const extractValidationCompletionResult = (result: string) => {
  const extractAbideResult = result.match(/Abides styleguide:\s+(.*)/i);
  const isAbideStyleGuide = extractAbideResult?.[1];
  if (!isAbideStyleGuide) {
    return null;
  }
  const extractValidationResult = result.match(/Rule violated:\n*([\s\S]+)/i);
  const ruleViolated = extractValidationResult?.[1];
  if (!ruleViolated) {
    return null;
  }
  return {
    isAbideStyleGuide: isAbideStyleGuide as 'Yes' | 'No',
    ruleViolated,
  };
};
