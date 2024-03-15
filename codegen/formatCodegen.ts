import { exec } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { argv } from 'process';

import { camelCaseConstant } from './utils/camelCaseConstant';
import { removeDuplicateConst } from './utils/removeDuplicateConst';

(async () => {
  const convertConst = async () => {
    const [, , ...paths] = argv;
    const rootPath = process.cwd();
    paths
      .filter(path => !/schema/.test(path))
      .forEach(path => {
        const fileContent = readFileSync(`${rootPath}/${path}`, {
          encoding: 'utf-8',
        });
        // turn the constant that is not graphql to camelCase
        let newContent = camelCaseConstant(fileContent);
        newContent = removeDuplicateConst(newContent);
        writeFileSync(path, newContent);
      });
    // trigger lint fix
    exec(`eslint --fix ${paths.join(' ')}`);
  };
  await convertConst();
})();
