const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist/js');

const bool = true;

const config = {
	entry: `${APP_DIR}/index.js`,
	output: {
		path: BUILD_DIR,
		publicPath: '/js',
		filename: 'bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader',
				exclude: '/node_modules'
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader', 'css-loader'
				]
			},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: APP_DIR,
        loader: 'url-loader?limit=30000&name=images/[name].[ext]'
      }
		]
	},
	devServer: {
		contentBase: './dist',
		port: 8080,
		historyApiFallback: bool
	},
};

module.exports = config;
