const path = require("path");

const GasAssetWebpackPlugin = require("./gas-asset-webpack-plugin");

/**
 * @type import('webpack').Configuration
 */

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "client", "index.ts"),
  output: {
    path: path.resolve(__dirname, "build", "client"),
    filename: "main.js.html",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new GasAssetWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
