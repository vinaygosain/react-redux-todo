const webpackConfig = require('./webpack.config.js')();

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-coverage'),
            require('karma-jasmine-html-reporter'),
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            'src/tests/**/*.js'
        ],
        preprocessors: {
            'src/tests/**/*.js': ['webpack'],
        },
        webpack: webpackConfig,
        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
        },
        reporters: ['progress', 'kjhtml', 'coverage'],
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};