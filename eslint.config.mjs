import globals from 'globals';
import eslint  from '@eslint/js';7;
import jsdocPlugin from 'eslint-plugin-jsdoc';

export default [
  { languageOptions: { globals: globals.browser } },

  // extends ...
  eslint .configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
    },
    plugins: {
      ['jsdoc']: jsdocPlugin,
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': 'off', // doesn't work well on GitHub
      'quotes': ['error','single'],
      'semi': ['error','always'],
      'no-unused-vars': ['warn', { 'args': 'after-used','ignoreRestSiblings': true }],
      'no-console': 'error',
      'no-debugger': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': 'error',
      'brace-style': ['error','1tbs', { 'allowSingleLine': true }],
      'array-callback-return': 'warn',
      'consistent-return': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1,'maxEOF': 0 }],
      'prefer-const': ['error', { 'destructuring': 'all','ignoreReadBeforeAssign': false }],
      'no-const-assign': 'error',
      'no-new': 'error',
      'no-this-before-super': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'jsdoc/check-tag-names': ['error', {
        definedTags: ['title', 'fileOverview', 'creationDate', 'lastUpdated', 'notes']
      }],
      'jsdoc/require-jsdoc': 'error',
      'jsdoc/require-param': 'error',
      'jsdoc/require-returns': 'error',
    }
  }
];