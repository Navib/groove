/**
 *   ./webpack.config.js
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
   entry: './src/index.js',
   output: {
     path: path.resolve('src'),
     filename: 'bundle.js'
   },
   module: {
     rules: [
       {
         test: /\.js[x]?$/,
         use: ['babel-loader'],
         exclude: /node_modules/,
        },
       {
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
           use: ['css-loader', 'sass-loader']
         })
       },
     ],
   },
   plugins: [
     new ExtractTextPlugin({
       filename: 'style.css',
       allChunks: true,
     })
   ],
   devServer: {
     historyApiFallback: true
   }
 }
