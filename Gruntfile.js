module.exports = function init(grunt) {
  grunt.initConfig({
    clean: {
      build: {
        files: [
          {
            dot: true,
            src: ['build/*']
          }
        ]
      }
    },
    prettier: {
      files: {
        src: ['Gruntfile.js', 'src/*.js', 'src/**/*.js']
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['Gruntfile.js', 'src/*.js', 'src/**/*.js']
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: 'src/',
            dest: 'build/src/',
            src: '**'
          },
          {
            expand: true,
            dot: true,
            cwd: '',
            dest: 'build/',
            src: 'package.json'
          },
          {
            expand: true,
            dot: true,
            cwd: '',
            dest: 'build/',
            src: 'package-lock.json'
          },
          {
            expand: true,
            dot: true,
            cwd: 'views',
            dest: 'build/views/',
            src: '**'
          },
          {
            expand: true,
            dot: true,
            cwd: 'public/',
            dest: 'build/public/',
            src: '**'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-prettier');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('pretty', ['prettier']);
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build', ['clean', 'prettier', 'eslint', 'copy']);
};
