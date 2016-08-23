module.exports = function (grunt) {

    var utils = require('./utils.js')();

    utils.configureGrunt(grunt, './tasks/');

    grunt.registerTask('default', ['markdownpdf']);
};
