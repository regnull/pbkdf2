var path = require('path');

module.exports = {
  entry: './browser.js',
  output: {
    path: path.resolve(__dirname),
    filename: './build/pbkdf2_wp.js'
  }
};
