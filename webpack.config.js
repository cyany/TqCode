const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
	entry: {
	     bigScreen: './src/js/bigScreen.js'
	   },
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].[chunkhash].js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:"babel-loader"
				}
			},
			{
				test:/\.html$/,
				use:[
					{
						loader:'html-loader',
						options:{minimize:true}
					}
				]
			},
			{
				test:/\.scss$/,
				use:['style-loader',MiniCssExtractPlugin.loader,"css-loader",'sass-loader']
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin('dist',{}),
		new HtmlWebPackPlugin({
			template:"./src/html/bigScreen.html",
			filename:'./index.html'
		}),
		new MiniCssExtractPlugin({
			// filename:'[name].css',
			filename:'style.[contenthash].css',
			chunkFilename:"[id].css"
		}),
		new WebpackMd5Hash()
	]
}