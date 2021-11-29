'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

function devWatch() {
  return gulp.watch('./src/*.scss', buildStyles);
}

exports.buildStyles = buildStyles;
exports.devWatch = devWatch;