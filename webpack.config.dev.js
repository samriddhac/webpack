var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/js/index.js'], //Webpack allows multiple entry points
	output: {
		path: path.join(__dirname, 'dist'), //--dirname : Always points to the directory where the script resides. . refers to the location from where node is getting executed.
		filename: 'bundle.js'
	},
	plugins:[ //Array that holds all the plugins
		new webpack.optimize.UglifyJsPlugin({ //The plugin that minifies the js code
			compressor: {
				warnings:false
				warnings:false
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(), //Chunks id s by occurance count
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	],
	module:{ //section where loaders are specified
		loaders: [
			{
				test: /\.css$/, //Regular expression to files where loader will be applied
				loaders: ['style-loader','css-loader','sass-loader'] //Array of loaders. Loaders are applied from right to left. It's no longer allowed to omit the '-loader' suffix when using loaders.
			}
		]
	}
}