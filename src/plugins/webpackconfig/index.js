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
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
          ],
        },
        plugins: [
          new webpack.ProvidePlugin({
              Buffer: ['buffer', 'Buffer'],
          })
        ],
      };
    },
  };
};