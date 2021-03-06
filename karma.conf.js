module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['mocha', 'sinon-chai', 'dojo'],

    // list of files / patterns to load in the browser
    files: [
      'spec/karma.main.js',

      // all the sources, tests, data
      {pattern: 'app/js/**/*.js', included: false},
      {pattern: 'app/js/**/*Spec.js', included: true},
      {pattern: 'app/js/**/**/*.js', included: false},
      {pattern: 'app/js/**/**/*Spec.js', included: true}
    ],

    // list of files to exclude
    // exclude: [
    // ],

    // test results reporter to use
    // possible values: dots || progress
    reporters: ['spec'],

    // web server port
    port: 9876,

    // proxy for cross domain requests
    // proxies:  {
    //   '/arcgis/': 'https://landscape3.arcgis.com/arcgis/'
    // },

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    browsers: ['IE', 'PhantomJS'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    plugins: [
      'karma-dojo',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-ie-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ]
  });
};
