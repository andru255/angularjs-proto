var files = [
    'libs/angularjs.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'app.js',
];
files.push('*.spec.js');

module.exports = function (config) {
    config.set({
        basePath: './',
        files: files,
        reporters: ['progress', 'mocha'],
        logLevel: config.LOG_INFO,
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-mocha-reporter'
        ]
    });
}