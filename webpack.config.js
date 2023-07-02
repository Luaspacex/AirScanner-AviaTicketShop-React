

// {
// resolve: {
//   modules: [...],
//   fallback: {
//     "fs": false,
//     "tls": false,
//     "net": false,
//     "path": false,
//     "zlib": false,
//     "http": false,
//     "https": false,
//     "stream": false,
//     "crypto": false,
//     "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
//   } 
// },
// entry: [...],
// output: {...},
// module: {
//   rules: [...]
// },
// plugins: [...],
// optimization: {
//   minimizer: [...],
// },
// // node: {
// //   fs: 'empty',
// //   net: 'empty',
// //   tls: 'empty'
// // },
// }

const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: false, // require.resolve("crypto-browserify") can be polyfilled here if needed
    stream: false, // require.resolve("stream-browserify") can be polyfilled here if needed
    assert: false, // require.resolve("assert") can be polyfilled here if needed
    http: false, // require.resolve("stream-http") can be polyfilled here if needed
    https: false, // require.resolve("https-browserify") can be polyfilled here if needed
    os: false, // require.resolve("os-browserify") can be polyfilled here if needed
    url: false, // require.resolve("url") can be polyfilled here if needed
    zlib: false, // require.resolve("browserify-zlib") can be polyfilled here if needed
    // headers: { "Access-Control-Allow-Origin": "*" }

  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  config.ignoreWarnings = [/Failed to parse source map/];
  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: "pre",
    loader: require.resolve("source-map-loader"),
    // resolve: {
    //   fullySpecified: false,
    // },
    resolve: {
      fallback: {
        console: require.resolve('console-browserify'),
        url: require.resolve('url/'),
      },
    },
  });
  return config;
};

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // Other webpack configuration options...
  resolve: {
    fallback: {
      assert: require.resolve('node-libs-browser/mock/empty'),
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
    // Other plugins...
  ],
};
