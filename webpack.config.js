'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
 entry : [
     './client/receipt_app.js'
 ],
 output: {
     path: './build',
     filename: 'receipt_bundle.js'
 },
 resolve: {
     extensions: ['', '.js', '.jsx']
 },
 plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new HtmlWebpackPlugin({ template: './client/index.html', inject: true })
 ],
 module: {
     loaders: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }]
 },  // Our Webpack Development Server config
 devServer: {
    inline: true,
    progress: true,
    historyApiFallback: true,
    stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
        errors: true,
        errorDetails: true,
        warnings: false
    },
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
 }
};