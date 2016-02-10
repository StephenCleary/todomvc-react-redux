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
		]
	},
	devtool: 'source-map'
};
