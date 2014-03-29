'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        loadPath: [
          'lib/stylish/*',
          'app/bower_components/normalize-scss'
        ],
        banner: '/*\n' +
          '* <%= pkg.name %> - version <%= pkg.version %>\n' +
          '* <%= pkg.description %>\n' +
          '* <%= pkg.homepage %>\n' +
          '* Copyright (c) <%= pkg.author %>\n' +
          '* License <%= pkg.license %>\n' +
          '*/'
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/stylish.min.css' : 'lib/stylish.scss'
        }
      },
      dev: {
        files: {
          'dist/stylish.css': 'lib/stylish.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass']);
}