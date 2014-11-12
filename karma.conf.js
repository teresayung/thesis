module.exports = function(config){
  //Configurations
  config.set({
    //Base Path is the root path location that will be used to resolve all relative paths defined in files and exclude
    basePath: '',

    //Frameworks - list of frameworks you want to use for testing ie, jasmine, mocha, qunit
    frameworks: ['jasmine'],

    //Files - array of files or patterns to load in browser.  The files array determines which files are included in the browser and whilc files are watched and served by Karma
    files: ['www/index.html', 'www/js/**/**.js', 'www/js/views/**/**.html', 'www/lib/**/**.js'],
    //angular lib. ui-router, mocks,

    //Exclude - array of files or patterns to exclude, karma.conf.hs typically gets excluded if it is in your file pathway
    exclude: ['www/lib/**/**.min.js'],

    //Port- web server port
    port: 8080, //*** IS THIS NECESSARY WHEN WE USE IONIC SERVE??

    //Log Level - level of logging - possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    //Autowatch - enabling or disabling watching files and executing tests whenever one of these files changes
    autoWatch: false,

    //Browser - a list of browsers to launch and capture.  When Karma starts up, it will also start up each browser which is placed within this setting.  Once Karma is shut down, it will shutdown these browsers as well.  You can also capture any browser manually by opening the browser and visiting the URL where the Karma web server is listening (http://localhost:SOMEPORT , ie: 8080)
    browsers: ['Chrome'],

    //Single Run - if true, karma will start and capture all configured browsers, run tests and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed
    singleRun: true
  });
};