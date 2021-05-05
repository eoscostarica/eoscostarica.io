const webpack = require('webpack')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000']
            }
          ],
        },
        plugins: [
          new webpack.ProvidePlugin({
              Buffer: ['buffer', 'Buffer'],
          },
          new NodePolyfillPlugin()
          )
        ],
      };
    },
  };
};