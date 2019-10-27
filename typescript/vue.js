/**
 * @type import('eslint').Linter.Config
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: false,
    },
    warnOnUnsupportedTypeScriptVersion: false,
    extraFileExtensions: ['.vue'],
  },
  extends: [
    '../rules/base.yml',
    '../rules/typescript.yml',
    '../rules/vue.yml',
    'plugin:import/typescript',
  ],
};
