/** @format */

const path = require('path');

module.exports = {
	mode: 'production',
	entry: './test7.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
