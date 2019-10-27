module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: false,
    },
  },
  extends: [
    '../rules/base.yml',
    '../rules/typescript.yml',
    'plugin:import/typescript',
  ],
};
