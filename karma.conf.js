// Karma configuration
// Generated on Mon Nov 14 2016 01:29:10 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {

        'src/*.js': ['coverage']

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],

	junitReporter: {
		outputDir: 'reports/junit', // results will be saved as $outputDir/$browserName.xml 
		//outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile 
		//suite: '', // suite will become the package name attribute in xml testsuite element 
		//useBrowserName: true, // add browser name to report and classes names 
		//nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element 
		//classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element 
		//properties: {} // key value pair of properties to add to the <properties> section of the report 
    },
	
	coverageReporter: {
      // specify a common output directory
      dir: 'reports/coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
      ]
    },
	

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

	captureTimeout: 60000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
