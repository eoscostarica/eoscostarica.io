const webpack = require('webpack')
module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader']
            }
          ],
        }
      };
    },
  };
};