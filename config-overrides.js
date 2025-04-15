const webpack = require('webpack');
const path = require('path');

module.exports = function override(config) {
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    zlib: require.resolve('browserify-zlib'),
    url: require.resolve('url/'),
    buffer: require.resolve('buffer'),
    process: require.resolve('process/browser.js'), // ✅ KEY LINE
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser.js', // ✅ Make sure .js is there
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};