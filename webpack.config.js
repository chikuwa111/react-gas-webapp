const path = require("path");

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
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
