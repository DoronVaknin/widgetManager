module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          livereload: true,
          port: 9000,
          base: '.'
        }
      }
    },
    open: {
      dev: {
        path: 'http://localhost:9000',
        app: 'Chrome'
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      files: ['index.html', 'js/**/*', 'css/**/*', 'templates/**/*']
    }
  });

  // load run sub-tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // define build & run tasks
  grunt.registerTask('run', ['connect', 'open', 'watch']);
};