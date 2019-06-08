const path = require("path");
const nodeExternals = require("webpack-node-externals");

const common = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
};

module.exports = [
  {
    ...common,
    target: "web",
    entry: path.join(__dirname, "src", "client", "index.tsx"),
    output: {
      path: path.join(__dirname, "dist", "public"),
      filename: "client.js"
    }
  },
  {
    ...common,
    target: "node",
    entry: path.join(__dirname, "src", "server", "index.tsx"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "server.js"
    },
    externals: nodeExternals(),
    node: {
      __dirname: false,
      __filename: false
    }
  }
];
