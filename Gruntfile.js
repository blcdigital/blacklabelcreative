/*global module:false*/

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: false
            },
            main: {
                files: {
                    '_site/assets/css/style.css': 'src/sass/style.scss',
                    '_site/assets/css/ie.css' : 'src/sass/ie.scss'
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    '_site/assets/css/style.css': ['_site/assets/css/style.css'],
                    '_site/assets/css/ie.css': ['_site/assets/css/ie.css']
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            all: [
                'Gruntfile.js',
                'src/js/**/*.js'
            ]
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            develop: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    '_site/assets/js/libs.js': [
                        'bower_components/jquery/dist/jquery.min.js'
                    ],
                    '_site/assets/js/script.js': ['src/js/script.js']
                }
            },
            deploy: {
                files: {
                    '_site/assets/js/libs.js': [
                        'bower_components/jquery/dist/jquery.min.js'
                    ],
                    '_site/assets/js/script.js': ['src/js/script.js']
                }
            }
        },
        clean: {
            fonts: {
                src: ['_site/assets/fonts/*']
            },
            images: {
                src: ['_site/assets/images/*']
            }
        },
        copy: {
            data: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/data/',
                        src: ['**'],
                        dest: '_site/assets/data/'
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts/',
                        src: ['**'],
                        dest: '_site/assets/fonts/'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/public/',
                        src: ['**'],
                        dest: '_site/assets/images/'
                    }
                ]
            }
        },
        imagemin: {
            deploy: {
                files: [{
                    expand: true,
                    cwd: '_site/assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '_site/assets/images/'
                }]
            }
        },
        'cache-busting': {
            style: {
                replace: ['_site/**/*.html'],
                replacement: 'style.css',
                file: '_site/assets/css/style.css',
                get_param: true,
            },
            libs: {
                replace: ['_site/**/*.html'],
                replacement: 'libs.js',
                file: '_site/assets/js/libs.js',
                get_param: true,
            },
            script: {
                replace: ['_site/**/*.html'],
                replacement: 'script.js',
                file: '_site/assets/js/script.js',
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
            },
            script: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-cache-busting');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // Default task(s)
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['clean', 'sass', 'uglify:develop', 'copy']);
    grunt.registerTask('deploy', ['build', 'cssmin', 'uglify:deploy', 'imagemin', 'cache-busting']);
    grunt.registerTask('default', ['test', 'deploy']);
};
