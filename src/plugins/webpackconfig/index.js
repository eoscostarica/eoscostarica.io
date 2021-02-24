const webpack = require('webpack')

module.exports = function (context, options) {
    return {
      name: 'custom-docusaurus-plugin',
      configureWebpack(config, isServer, utils) {
        const {getCacheLoader} = utils;
        return {
          module: {
            rules: [
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' }
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