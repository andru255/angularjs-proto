exports.config = {
    directConnect: true,
    allScriptsTimout: 11000,
    specs: [
        '*.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3000',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};