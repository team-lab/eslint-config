module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: false
    }
  },
  extends: ["./rules/base.yml", "./rules/typesript.yml"]
};
