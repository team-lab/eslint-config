// Variables
const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // 特定のグローバル変数の使用を許可しない
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals)
  }
};
