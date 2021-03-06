const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[hash].js",
        path: path.join(__dirname,"dist")
    },
    plugins: [new HtmlWebpackPlugin({
      template : "./src/template.html"
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader","sass-loader"],
          },
        ],
      }
}