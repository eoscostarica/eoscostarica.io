module.exports = function(context, options) {
    return {
      name: 'loaders',
      configureWebpack(config, isServer) {
        return {
          module: {
            rules: [
              {
                test: /\.(png|jpg|gif|svg|woff2)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[hash:7].[ext]'
                        },
                     },
                 ],
              },
            ],
          },
        };
      },
    };
  };