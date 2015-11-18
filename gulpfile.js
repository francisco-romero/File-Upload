'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

/*var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      'css/*.css',
      'less/*.less',
      'js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});*/

/*var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('less', function() {
   gulp.src('less/*.less')
      .pipe(watch('less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('css'));
});*/

/*var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

gulp.task('js', function() {
   return gulp.src('js/*.js')
   .pipe(plugins.jshint())
   .pipe(plugins.jshint.reporter('default'))
   .pipe(plugins.uglify())
   .pipe(plugins.concat('app.js'))
   .pipe(gulp.dest('build'));
});*/


/*var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat');

gulp.task('minify', function() {
   gulp.src('js/app.js')
   .pipe(uglify())
   .pipe(gulp.dest('build'));
});

gulp.task('js', function() {
    var stream = gulp.src('js/*.js') 
   .pipe(jshint())
   .pipe(jshint.reporter('default'))
   .pipe(uglify())
   .pipe(concat('app.js'))
   .pipe(gulp.dest('build'));
    
    return stream;
});*/