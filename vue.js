/**
 * @type import('eslint').Linter.Config
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  extends: [
    './rules/base.yml',
    './rules/vue.yml',
  ],
  rules: {
    'comma-dangle': 'error',
  },
};
