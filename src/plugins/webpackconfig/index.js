const webpack = require('webpack')
module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack() {
      return {
        plugins: [
          new webpack.ProvidePlugin({
              Buffer: ['buffer', 'Buffer'],
          })
        ],
      };
    },
  };
};