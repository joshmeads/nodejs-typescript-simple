module.exports = {
  plugins: ['unused-imports', 'no-null', 'no-secrets', 'unicorn'],
  extends: [
    'plugin:unicorn/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  env: {
    es2021: true,
    node: true,
    browser: false,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'no-null/no-null': 2,
    'no-secrets/no-secrets': 2,
    'no-unused-vars': 0,
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/namespace': 1,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 1,
    'import/export': 1,
    'import/no-extraneous-dependencies': 1,
    'import/no-mutable-exports': 2,
    'import/namespace': 2,
    'import/newline-after-import': 2,
    'unicorn/prevent-abbreviations': [
      1,
      {
        allowList: {
          props: true,
          req: true,
          res: true,
        },
        checkShorthandImports: false,
      },
    ],
  },
};
