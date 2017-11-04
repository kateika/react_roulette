const path = require('path');

module.exports = {
  generateScopedName: '[path][name]__[local]--[hash:base64:5]',
  camelCase: 'only',
  rootDir: path.resolve(__dirname, 'src')
};
