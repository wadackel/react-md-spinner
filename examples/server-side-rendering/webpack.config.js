const path = require("path");

module.exports = {
  debug: true,
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },

  resolveLoader: {
    modulesDirectories: [
      path.resolve(__dirname, "../../node_modules/"),
      path.resolve(__dirname, "node_modules/")
    ]
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel"] }
    ]
  }
};