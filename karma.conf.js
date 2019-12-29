var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		// Look for test files in path specified in globbing pattern
		files: ['app/tests/**/*.test.jsx'],
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				// Fail test if exceeds 5 sec runtime
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};
