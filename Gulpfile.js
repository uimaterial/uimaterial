'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./src/uikit.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(gulp.dest('./examples'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});