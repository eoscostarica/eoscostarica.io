const webpack = require("webpack");
module.exports = function () {
  return {
    name: "custom-docusaurus-plugin",
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              use: ["url-loader?limit=100000"],
            },
          ],
        },
        resolve: {
          alias: {
            process: "process/browser",
            stream: "stream-browserify",
            zlib: "browserify-zlib",
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
          }),
        ],
      };
    },
  };
};
