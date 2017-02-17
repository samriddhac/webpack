var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		//'webpack-dev-server/client?http://localhost:8080',
		//'webpack/hot/devserver',
		'./src/js/index.js'], //Webpack allows multiple entry points
	output: {
		path: path.join(__dirname, 'dist'), //--dirname : Always points to the directory where the script resides. . refers to the location from where node is getting executed.
		filename: 'bundle.js'
	},
	plugins:[ //Array that holds all the plugins
		new webpack.optimize.UglifyJsPlugin({ //The plugin that minifies the js code
			compressor: {
				warnings:false
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(), //Chunks id s by occurance count
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),
		new DefinePlugin({
			'process.env.NODE_ENV' : JSON.stringify('development')
		})
	],
	module:{ //section where loaders are specified
		loaders: [
			{
				test: /\.css$/, //Regular expression to files where loader will be applied
				loaders: ['style-loader','css-loader','sass-loader'] //Array of loaders. Loaders are applied from right to left. It's no longer allowed to omit the '-loader' suffix when using loaders.
			},
			{
				test: /\.js$/, //Regular expression to files where loader will be applied
				loaders: ['babel-loader'], //Array of loaders. Loaders are applied from right to left. It's no longer allowed to omit the '-loader' suffix when using loaders.
				include: path.join(__dirname, 'src')
			}
		]
	},
	devServer: {
		contentBase:'./dist',
		hot: true
	}
}