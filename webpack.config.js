const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path=require('path');
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader", "postcss-loader",
            ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|webp)|jpg$/i, 
          loader: 'file-loader',
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: "index.css",
          chunkFilename: "index.css"
        }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
      })
    ],
    devServer: {
      static: path.resolve(__dirname, "./dist"),
      hot: true,
      historyApiFallback: true,
      port:3000
    },
  };