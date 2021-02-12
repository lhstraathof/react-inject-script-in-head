const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    webpack: {
      configure: (webpackConfig, { env }) => {
        // if (env !== 'development') {
          const htmlWebpackPluginInstance = webpackConfig.plugins.find(
            webpackPlugin => webpackPlugin instanceof HtmlWebpackPlugin
          );
          if (htmlWebpackPluginInstance) {
            htmlWebpackPluginInstance.options.inject = 'head';
            htmlWebpackPluginInstance.options.scriptLoading = 'blocking';
          }
        // }
        return webpackConfig;
      },
    },
  };
};