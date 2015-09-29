var gulp = require('gulp');
var gutil = require('gutil');

var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');

var plumber = require('gulp-plumber');

var sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	uglify = require('gulp-uglify'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr(),
	notify = require("gulp-notify");


var options = {
	// HTML
	HTML_SOURCE     : "views/**/*.tpl",

	// SASS / CSS
	SASS_SOURCE     : "sass/main.scss",
	SASS_DEST       : "assets/css/",

	// JavaScript
	COFFEE_SOURCE   : "coffee/**/*.coffee",
	COFFEE_DEST     : "assets/js/",

	// Icons
	ICONS_SOURCE    : "src/sass/app/components/icons/svg/*.svg",
	ICONS_DEST      : "build/css/fonts/",

	// Live reload
	LIVE_RELOAD_PORT: 35729
};

gulp.task('coffeescript', function(){

	gulp.src(['./coffee/**/*.coffee', './coffee/**/*.coffee'])
		.pipe(sourcemaps.init())
		.pipe(coffee({ bare: true })).on('error', gutil.log)
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./assets/js'));

});
gulp.task('watch-coffeescript', function () {
	gulp.watch(['./coffee/*.coffee'], ['coffeescript']);
	gulp.watch(['./coffee/**/*.coffee'], ['coffeescript']);
	gulp.watch(['./sass/**/*.scss'], ['sass']);
});

gulp.task('sass', function() {
	gulp.src( options.SASS_SOURCE )
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'compressed',
			// sourceComments: 'map'
		}))
		.on("error", notify.onError())
		.on("error", function (err) {
			console.log("Error:", err);
		})
		.pipe(gulp.dest( options.SASS_DEST ));
});

gulp.task('sass-local', function() {

	console.log('sass generating');
});


gulp.task('default', ['coffeescript', 'sass', 'watch-coffeescript']);
