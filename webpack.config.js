require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = (env) => {
	const ENV = process.env.ENV ? process.env.ENV : 'local';

	const chunks = {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
					maxSize: 5000000,
				},
			},
		},
	};

	return {
		entry: {
			app: path.join(__dirname, './src/index.jsx'),
		},
		output: {
			filename: 'bundle/[name].[contenthash].bundle.js',
			chunkFilename: 'bundle/[name].[chunkhash].bundle.js',
			path: path.resolve(__dirname, 'dist/'),
			publicPath: ENV == 'local' ? '' : process.env.VIEWURL + '/',
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'index.html',
				filename: 'index.html',
			}),
			new webpack.DefinePlugin({
				BASEURL: JSON.stringify(process.env.BASEURL),
				VIEWURL: JSON.stringify(process.env.VIEWURL),
			}),
		],
		devServer: {
			static: {
				directory: path.join(__dirname, 'dist'),
			},
			hot: true,
			historyApiFallback: true,
			host: process.env.HOST ? process.env.HOST : 'localhost',
			port: process.env.PORT ? process.env.PORT : '8080',
		},
		devtool: ENV == 'local' ? 'source-map' : false,
		optimization:
			ENV == 'local'
				? { ...chunks }
				: {
						minimize: true,
						minimizer: [
							new EsbuildPlugin({
								target: 'es2018',
								css: true,
							}),
						],
						...chunks,
					},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'esbuild-loader',
					options: {
						loader: 'jsx',
						target: 'es2018',
					},
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'esbuild-loader',
							options: {
								loader: 'css',
								minify: ENV == 'local' ? false : true,
							},
						},
					],
				},
			],
		},
		resolve: {
			alias: {
				components: path.resolve(__dirname, 'src/components/'),
			},
		},
	};
};
