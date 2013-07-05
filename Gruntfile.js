/*global module:false*/

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jekyll: {
			dev: {
				src: './',
				dest: './deploy'
			}
		},
		sass: {
			dev: {
				files: {
					'deploy/assets/css/style.min.css': 'src/sass/style.scss',
					'deploy/assets/css/ie.min.css' : [
						'src/sass/style_small.scss',
						'src/sass/style_medium.scss',
						'src/sass/style_large.scss'
					]
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'deploy/assets/css/style.min.css': ['deploy/assets/css/style.min.css'],
					'deploy/assets/css/ie.min.css': ['deploy/assets/css/ie.min.css']
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
			all: ['Gruntfile.js', 'src/js/script.js']
		},
		uglify: {
			options: {
				mangle: {
					except: ['jQuery']
				}
			},
			deploy: {
				files: {
					'deploy/assets/js/lib.min.js': ['src/js/libs/jquery/*.js', 'src/js/libs/touch/*.js'],
					'deploy/assets/js/script.min.js': ['src/js/script.js']
				}
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: 'src/images/',
						src: ['**'],
						dest: 'deploy/assets/images/'
					}
				]
			}
		},
		watch: {
			sass: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			script: {
				files: '<%= jshint.all %>',
				tasks: ['jshint', 'uglify']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');

	// Default task(s)
	grunt.registerTask('default', ['jekyll', 'sass', 'cssmin', 'jshint', 'uglify', 'copy']);
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('deploy', ['jekyll', 'sass', 'cssmin', 'uglify', 'copy']);
};