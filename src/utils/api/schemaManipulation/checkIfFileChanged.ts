import { readFile } from 'fs/promises';

// check if file changed, return true if changed
export const checkIfFileChanged = async ({
  filePath,
  text,
}: {
  filePath: string;
  text: string;
}) => {
  try {
    const content = await readFile(filePath, { encoding: 'utf8' });
    return content !== text;
  } catch (err) {
    return true;
  }
};
