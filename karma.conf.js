var files = [
    // libraries
    'libs/angular/angularjs.js',
    'node_modules/angular-route/angular-route.min.js',
    'libs/angular/angular-animate.min.js',
    'libs/angular/angular-aria.min.js',
    'libs/angular/angular-messages.min.js',
    'libs/angular-material/angular-material.min.js',
    'node_modules/dragula/dist/dragula.min.js',
    'node_modules/angularjs-dragula/dist/angularjs-dragula.min.js',
    'node_modules/moment/min/moment.min.js',
    'node_modules/angular-moment/angular-moment.min.js',
    'node_modules/angular-mocks/angular-mocks.js',

    // app stuff
    'app/app.js',
    'app/app.routes.js',
    'app/app.config.js',
    'app/components/**/*.component.js',
    'app/components/**/*.spec.js',
    'app/modules/**/*.path.js',
    'app/modules/**/*.module.js',
    'app/modules/**/*.component.js',
    'app/modules/**/*.spec.js',
];

module.exports = function (config) {
    config.set({
        basePath: './',
        files: files,
        reporters: ['progress', 'mocha'],
        logLevel: config.LOG_INFO,
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['ChromeHeadless'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-mocha-reporter'
        ]
    });
}