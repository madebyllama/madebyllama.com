module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'bin/js/app.js': 'coffee/app.coffee'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'bin/js/app.js']
    },
    jade: {
      compile: {
        options: {
          data: function(){
            return require('./jade/data.json');
          }
        },
        files: {
          "bin/index.html": "jade/*.jade"
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'bin/css/main.css': 'sass/main.scss'
        }
      }
    },
    modernizr: {
      dist: {
        // Path to save out the built file
        "dest" : "./bin/js/modernizr.js",
        // More settings go here
        "parseFiles": true,
        "tests": [
          "svg"
        ],
        "options": [
          "setClasses"
        ],
        //"uglify": true,
        "uglify": true,
        "crawl": true,

        // Set to true to pass in buffers via the "files" parameter below
        "useBuffers" : true,

        // By default, this task will crawl all *.js, *.css, *.scss files.
        "files" : {
          "src": [
            "**/**/*.{js,css,scss}"
          ]
        }
      }
    },
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass'],
        options: {
          spawn: true
        }
      },

      coffee: {
        files: ['coffee/*.coffee'],
        tasks: ['coffee', 'jshint'],
        options: {
          spawn: true
        }
      },

      jade: {
        files: ['jade/*.jade'],
        tasks: ['jade'],
        options: {
          spawn: true
        }
      }
    },
    'sftp-deploy': {
      live: {
        auth: {
          host: 'madebyllama.com',
          port: 22,
          authKey: 'GRUNT_SFTP'
        },
        cache: 'sftpCache.json',
        src: 'bin',
        dest: '/var/www/vhosts/imbadesign.com/madebyllama.com',
        serverSep: '/',
        concurrency: 1,
        progress: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks("grunt-modernizr");

  grunt.loadNpmTasks('grunt-sftp-deploy');

  // Default task(s).
  grunt.registerTask('build',   ['coffee', 'jshint', 'jade', 'sass', 'modernizr:dist']);
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('release', ['build', 'sftp-deploy']);

};


//"tests": [
//  "svg"
//],
//  "extensibility": [
//  "setClasses"
//],
//  "uglify": true