HTML/CSS/JS Template v0.4.2
====================

After getting bored of setting up the same prototyping framework over and over again, I decided to create this template. The main idea behind it is to make prototyping quick and easy.

Feel free to use it as you wish. If you find any nice ways to improve it submit a pull request!

Libraries
---------------------

This template includeds:

- jQuery v1.11.0
- Hammer.JS (with the jQuery component) v1.0.3
- iOS Orientation Change Fix (authored by @scottjehl, rebounded by @wilto)

Getting started
---------------------

### Installation

To use this template you need [node.js](http://nodejs.org/download/) (min v0.10.24), [grunt.js](https://github.com/gruntjs/grunt/wiki/Getting-started) (min v0.4.0), Ruby and Sass (both for the sass task, [instructions here](https://github.com/gruntjs/grunt-contrib-sass#the-sass-task)).

Once this is set up, you need to install the additional grunt.js dependencies for the template. To do this, run the following in the downloaded root folder:

```shell
npm install
```

### Usage

1) Run the grunt deploy task to compile the included .scss and .js files. This way you won't get 404 errors when loading the project for the first time:

```shell
grunt
```

2) Run the grunt watch task to automatically compile the .scss files and lint the .js when you make changes:

```shell
grunt watch
```

3) Write code!

### Using the build tasks

There are 3 build tasks included in the Gruntfile:

```shell
grunt (test|build)
```

1. test: this will run the jasmine tests and lint the JS
2. build: this will compile and minify the CSS and JS and copy the images and font to the assets directory
1. default: this will run the tests and then build out the assets directory

Release History
---------------------

For a full release history, see the [Changelog](https://github.com/donofkarma/html-css-js-template/blob/master/CHANGELOG.md).

License
---------------------

MIT: [https://github.com/donofkarma/html-css-js-template/blob/master/LICENSE-MIT](https://github.com/donofkarma/html-css-js-template/blob/master/LICENSE-MIT)
