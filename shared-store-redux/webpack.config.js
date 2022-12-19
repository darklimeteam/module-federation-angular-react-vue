const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 3004,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'store',
      filename: 'remoteEntry.js',
      library: { type: 'global', name: 'store' },
      exposes: {
        './Store': './src/store',
      },
      shared: {
        '@reduxjs': { singleton: false, eager: true },
        effector: { singleton: true },
        'effector-vue': { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      title: "Project Title",
      template: "./src/index.html",
      inject: true,
    })
  ],
};
