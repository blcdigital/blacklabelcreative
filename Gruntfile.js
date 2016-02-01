module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vars: {
            buildDir: '_site',
            cssBuildDir: '_site/assets/css',
            dataBuildDir: '_site/assets/data',
            fontsBuildDir: '_site/assets/fonts',
            imagesBuildDir: '_site/assets/images'
        },
        clean: {
            fonts: {
                src: ['<%= vars.fontsBuildDir %>']
            },
            images: {
                src: ['<%= vars.imagesBuildDir %>']
            },
            style: {
                src: ['<%= vars.cssBuildDir %>']
            }
        },
        copy: {
            data: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/data/',
                        src: ['**'],
                        dest: '<%= vars.dataBuildDir %>'
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts/',
                        src: ['**'],
                        dest: '<%= vars.fontsBuildDir %>'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/public/',
                        src: ['**'],
                        dest: '<%= vars.imagesBuildDir %>'
                    }
                ]
            }
        },
        sass: {
            main: {
                files: {
                    '<%= vars.cssBuildDir %>/style.css': 'src/sass/style.scss'
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    '<%= vars.cssBuildDir %>/style.css': ['<%= vars.cssBuildDir %>/style.css']
                }
            }
        },
        'cache-busting': {
            style: {
                replace: ['_site/**/*.html'],
                replacement: 'style.css',
                file: '_site/assets/css/style.css',
                get_param: true,
            }
        },
        watch: {
            fonts: {
                files: ['src/fonts/**/*.*'],
                tasks: ['clean:fonts', 'copy:fonts']
            },
            images: {
                files: ['src/images/public/**/*.*'],
                tasks: ['clean:images', 'copy:images']
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass']
            }
        },
        jekyll: {
            build: {
                options: {
                    verbose: true
                }
            },
            serve: {
                options: {
                    serve: true
                }
            }
        },
        concurrent: {
            dev: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['jekyll:serve', 'watch']
            }
        }
    });

    // Load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // // Default task(s)
    grunt.registerTask('build', ['clean', 'copy', 'sass']);
    grunt.registerTask('deploy', ['jekyll:build', 'build', 'cssmin', 'cache-busting']);
    grunt.registerTask('default', ['build', 'concurrent']);
};
