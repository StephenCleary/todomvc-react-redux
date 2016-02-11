module.exports = {
	entry: './js/main.jsx',
	output: {
		filename: './js/app.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			}
		],
		preLoaders: [
			{
				test: /\.jsx$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		]
	},
	devtool: 'inline-source-map',
	eslint: {
		configFile: './.eslintrc'
	}
};
