/* eslint-disable no-undef */
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
require('@babel/register')({
  configFile: path.resolve(__dirname, './babel.config.js')
})

module.exports = (enviroment) => {
  console.log(process.env.NODE_ENV)

  return (
    {
      mode: process.env.NODE_ENV || 'development',
      devtool: process.env.NODE_ENV === 'development'
        ? 'source-map'
        : 'inline-source-map',
      //devtool: 'inline-source-map',
      target: "web",
      entry: path.join(__dirname, "src", "index.prod.js"),
      output: {
        path: path.join(__dirname, "dist"), //static
        publicPath: "/",
        filename: "build/[name].js",
        //filename: "scripts/bundle.[hash].js"
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true
        }),
        new MiniCssExtractPlugin({
          filename: "build/styles.css",
        }),
        new HTMLWebpackPlugin({
          filename: "index.html",
          //template: "public/index.html", // to import index.html file inside index.js
          template: path.resolve(__dirname, "public/index.html"), // to import index.html file inside index.js
          minify: false
        }),
        new Dotenv(),
        // new MiniCssExtractPlugin({
        //     filename: "build/css/[name].css",
        //     chunkFilename: "[id].css",
        //   }),
        //TODO CopyWebpackPlugin copia los archivos de assets del proyecto al build
        new CopyWebpackPlugin({
          patterns: [
            // {
            //   from: path.resolve(__dirname, 'src/assets'),
            //   to: path.resolve(__dirname, 'dist/assets'),
            // },
            // {
            //   from: path.resolve(__dirname, 'public/[name].ico'),
            //   to: path.resolve(__dirname, 'dist/public/[name].ico'),
            // },
          ]
        }),
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'public/*.ico'),
              to: path.resolve(__dirname, 'dist/public'),
            },
          ]
        }),
        //appCss
      ],
      optimization: {
        minimizer: [new TerserPlugin()]
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
            },
            exclude: [path.join(__dirname, "/node_modules")],
          },
          {
            test: /\.(ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            type: "asset/resource",
            generator: {
              filename: "assets/fonts/[hash][ext]",
            },
          },
          {
            test: /\.(eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: {
              loader: "svg-url-loader",
            },
          },
          {
            test: /\.(jpe?g|png|gif|webp)$/i,
            loader: "file-loader",
            options: {
              name: "./assets/[path][name].[ext]",
            },
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          }
        ],
      },
      resolve: {
        extensions: [".js", ".jsx", ".json", ".scss"],
      },
    }
  )
}
