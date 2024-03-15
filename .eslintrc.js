/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['**/generated/**', 'package.json'],
  overrides: [
    {
      /**
       * Disable no-undef on typescript file since the check it provides are already provided by Typescript without the need for configuration
       * Refs: https://github.com/typescript-eslint/typescript-eslint/blob/bbfed02ce62533d2020dc0b834cfa17e26a6d523/docs/linting/Troubleshooting.mdx?plain=1#L169
       */
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      /**
       * Turn off sort-keys for generated files (it will take longer to sort and there is no need to sort the generated files)
       */
      files: ['**/generated/**/*.ts'],
      rules: {
        'sort-destructure-keys/sort-destructure-keys': 'off',
        'sort-keys': 'off',
        'sort-keys/sort-keys-fix': 'off',
        'typescript-custom-sort-keys/interface': 'off',
      },
    },
    {
      files: ['**/__stories__/**'], // apply to all file under __stories__ folder
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**/api/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    /**
     * Listen to typescript configuration
     */
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'simple-import-sort',
    '@typescript-eslint',
    'deprecation',
    'sort-keys',
    'typescript-custom-sort-keys',
    'sort-destructure-keys',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // only check prefix for type that doesn't end with Props or Params
        filter: {
          match: false,
          regex: '(Props|Params)$',
        },
        format: ['PascalCase'],
        prefix: ['I', 'T'],
        selector: 'typeLike',
      },
      {
        // match suffix Props or Params and doesn't come right after I, T or IClass
        custom: {
          match: true,
          regex: '(?<!(I|T|IClass)([A-Z].)*)(Props|Params)$',
        },
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    /**
     * Report all unnecessary chaining "?".
     * @description https://github.com/typescript-eslint/typescript-eslint/issues/1641 (Issue description)
     * @info https://typescript-eslint.io/rules/no-unnecessary-condition/ (Eslint rule detail)
     * */
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    /** @link https://eslint.org/docs/latest/rules/no-unused-vars#ignorerestsiblings */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { typedefs: false }, // disable for typing definition
    ],
    camelcase: 'off',
    /**
     * Report deprecated variables (This is helpful to find deprecated variables are being used)
     * @link https://www.npmjs.com/package/eslint-plugin-deprecation
     * */
    'deprecation/deprecation': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      /** Allow test files to import library from devDependencies */
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          'jest-utils/**',
          '**/*.stories.tsx',
          '**/*.stories.ts',
          'next.config.js',
          '**/types/generated/**.types.ts',
          '**/*.d.ts',
        ],
      },
    ],
    'import/no-internal-modules': [
      'warn',
      {
        forbid: [
          'lodash',
          /* Allow access to lodash subfolders */
          'lodash!(/)',
        ],
      },
    ],
    'import/no-unresolved': 'off',
    // Typescript takes care of this
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-restricted-exports': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['src/types/*', '!src/types/generated'],
            message: 'Please use src/types instead',
          },
        ],
      },
    ],
    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        message: 'Use `jsonParse` function instead of `JSON.parse`',
        selector: 'MemberExpression[object.name="JSON"][property.name="parse"]',
      },
      // https://stackoverflow.com/questions/42226436/how-can-i-turn-off-eslints-no-restricted-syntax-rule-just-for-forofstatement
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // For debugging ease
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    // Disable the base rule it can report incorrect errors
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    // Try removing this after updating to "react-scripts": "^4.x"
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-newline': 'off',
    // Prettier takes care of this
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    // Prettier takes care of this
    'react/jsx-one-expression-per-line': 'off',
    /**
     * @ref https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': ['error'],
    // Prettier takes care of this
    'react/jsx-wrap-multilines': 'off',
    // Prettier takes care of this
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          /** Framework */
          ['^react', '^next'],
          /** Match all directories starting with `@` but not `@zonos`, and any path that does not start with `src/` (internal paths typically start with `src/`) */
          ['^(?!@zonos|src)'],
          /** External internal library */
          ['^@zonos'],
          /** Internal library */
          ['^src/'],
          /** Relative imports (e.g., './', '../') */
          ['^(\\.+/)'],
        ],
      },
    ],
    /**
     * Sort object destructure keys. This rule autofix doesn't tie with comment like `sort-keys`
     * @ref https://github.com/mthadley/eslint-plugin-sort-destructure-keys
     */
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false },
    ],
    'sort-keys': 'off',
    /**
     * Sort object keys (not included destructure object)
     * @ref https://github.com/namnm/eslint-plugin-sort-keys
     */
    'sort-keys/sort-keys-fix': ['warn', 'asc'],
    /**
     * Sort all types/interface keys
     * @ref https://github.com/prash471/eslint-plugin-typescript-custom-sort-keys
     */
    'typescript-custom-sort-keys/interface': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        showFunctionsAtEnd: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
};
