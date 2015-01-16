var gulp = require('gulp'),
    inject = require('gulp-inject'),
    config = require('./config');

gulp.task('runner',function() {
 var target = gulp.src(config.runner.src);
})
