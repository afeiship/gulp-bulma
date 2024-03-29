(function() {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('styles', function() {
    return gulp
      .src('src/*.scss')
      .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
      .pipe(gulp.dest('dist'));
  });
})();
