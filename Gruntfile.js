module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        options : {
            staticPath: 'static/',
            compassPath: 'compass/',
            jsPath: '<%= options.staticPath %>js/',
            cssPath: '<%= options.staticPath %>css/',
            imgPath: '<%= options.staticPath %>image/',
        },

        shell: {
            options: {
                stdout: true,
                stderr: true,
                stdin: true
            },

            compassWatch: {
                command: 'cd <%= options.compassPath %> && bundle exec compass watch'
            },

            compassClean: {
                command: 'cd <%= options.compassPath %> && bundle exec compass clean'
            },

            compassCompile: {
                command: 'cd <%= options.compassPath %> && bundle exec compass compile --force'
            },

            bundler: {
                command: 'cd <%= options.compassPath %> && bundle install --path .bundle'
            }
        },

        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },

                files: [
                    {
                        expand: true,
                        cwd: '<%= options.imgPath %>',
                        src: ['**/*.png'],
                        dest: '<%= options.imgPath %>',
                        ext: '.png'
                    }
                ]
            },

            jpg: {
                options: {
                    progressive: false
                },

                files: [
                    {
                        expand: true,
                        cwd: '<%= options.imgPath %>',
                        src: ['**/*.jpg'],
                        dest: '<%= options.imgPath %>',
                        ext: '.jpg'
                    }
                ]
            }
        },

        watch: {
            js: {
                files: ['<%= jshint.all %>'],
                tasks: ['jshint']
            },

            sprites: {
                files: ['<%= options.staticPath %>img/icon/*.png'],
                tasks: ['shell:compassCompile']
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },

            watchAll: {
                tasks: ['shell:compassWatch', 'watch']
            },

            watchStyleguide: {
                tasks: ['connect:styleguide', 'watch:styleguide', 'open:styleguide', 'shell:compassWatch']
            }
        }
    });

    // load tasks
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('imagemin', ['imagemin']);
    grunt.registerTask('bundler', ['shell:bundler']);
    grunt.registerTask('css', ['shell:compassCompile']);
    grunt.registerTask('cleancss', ['shell:compassClean']);
    grunt.registerTask('default', ['concurrent:watchAll']);
};