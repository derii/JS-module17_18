module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/jQuery.carousel.js', 'js/tmpl.js', 'js/script.js'],
        dest: 'js/assets/script.main.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/assets/script.main.min.js': ['js/assets/script.main.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        resetoundingPrecision: -1
      },
      target: {
        files: {
          'css/assets/style.main.min.css': ['css/*.css']
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['css/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false
        }
      },
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);

};