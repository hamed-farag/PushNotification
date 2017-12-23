var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var merge = require('webpack-merge');
var CompressionPlugin = require("compression-webpack-plugin");

var useHMR = !!global.HMR; // Hot Module Replacement (HMR)
var babelConfig = Object.assign({}, pkg.babel, {
	babelrc: false,
	cacheDirectory: useHMR,
});

var BUILD_DIR = function (environment) {
	return environment == 'production' ?
		path.resolve(__dirname, "../Todo") :
		path.resolve("C://inetpub/wwwroot/TODO");
}
var SRC_DIR = path.resolve(__dirname, "src");

var developmentConfig = environment => {
	return {
		devtool: 'source-map',
		entry: {
			App: [
				SRC_DIR + "/app/index.jsx"
			]
		}
	}
}

var productionConfig = environment => {
	return {
		entry: {
			App: [
				SRC_DIR + "/app/index.jsx"
			]
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				// sourceMap: true,
				compress: {
					screw_ie8: true,
					warnings: false
				},
				mangle: false,
				output: {
					comments: false,
					screw_ie8: true
				}
			}),
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new CompressionPlugin({
				asset: "[path].gz[query]",
				algorithm: "gzip",
				test: /\.(js)$/,
				threshold: 10240,
				minRatio: 0.8
			})
		]
	}
}

var testConfig = environment => {
	return {
		entry: {
			App: [
				SRC_DIR + "/app/index.jsx"
			]
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				// sourceMap: true,
				compress: {
					screw_ie8: true,
					warnings: false
				},
				mangle: false,
				output: {
					comments: false,
					screw_ie8: true
				}
			}),
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new CompressionPlugin({
				asset: "[path].gz[query]",
				algorithm: "gzip",
				test: /\.(js)$/,
				threshold: 10240,
				minRatio: 0.8
			})
		]
	}
}

var commonConfig = function (environment) {
	return {
		output: {
			path: BUILD_DIR(environment) + "/Scripts/FrontEnd/js",
			filename: "[name].min.js",
			chunkFilename: '[name].min.js',
			sourceMapFilename: '[name].js.map',
			publicPath: "/Scripts/FrontEnd/js/"
		},
		module: {
			loaders: [{
				test: /\.s?css$/,
				loaders: ['classnames-loader', 'style-loader', 'css-loader', 'sass-loader']
			}, {
				test: /\.(jpe?g|png|gif|svg)$/i,
				include: SRC_DIR,
				loaders: [
					'url-loader',
					'img-loader'
				]
			}, {
				test: /\.less?$/,
				loaders: ['classnames-loader', 'style-loader', 'css-loader', 'less-loader']
			}, {
				test: /\.jsx?$/,
				include: SRC_DIR,
				loaders: ["babel-loader?" + JSON.stringify(babelConfig)],
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			}]
		},
		resolve: {
			extensions: ['.jsx', '.js', '.json', '.scss', '.eot', '.ttf', '.svg', '.woff'],
			alias: {
				node_modules: path.resolve(__dirname, 'node_modules'),
				actions: path.resolve(__dirname, 'src/app/actions'),
				components: path.resolve(__dirname, 'src/app/components'),
				constants: path.resolve(__dirname, 'src/app/constants'),
				containers: path.resolve(__dirname, 'src/app/containers'),
				dispatchers: path.resolve(__dirname, 'src/app/dispatchers'),
				reducers: path.resolve(__dirname, 'src/app/reducers'),
				utilities: path.resolve(__dirname,'src/app/utilities'),
				helpers: path.resolve(__dirname,'src/app/helpers')
			}
		},
		stats: {
			warnings: false,
			performance: false,
			chunks: true,
			errors: true
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify(environment)
				},
				__PRODUCTION__: environment === 'production' || environment === 'test',
				__VERSION__: JSON.stringify(pkg.version)
			}),
			new webpack.optimize.CommonsChunkPlugin({
				children: true, // necessary for splitting children chunks
				async: true // necessary for async loading chunks
			})
		]
	}
}

module.exports = function () {
	// merge common config with the environment config
	const environment = process.env.NODE_ENV;
	return merge(commonConfig(environment), eval(environment + 'Config')(environment));
}()