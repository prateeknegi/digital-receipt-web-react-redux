var webpack = require('webpack');
var HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
 entry : './receipt_app.js',
 output: {
     path: './build',
     filename: 'receipt_bundle.js'
 },
 plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new HtmlWebpackPlugin({ template: './index.html', inject: false })
    ]
};