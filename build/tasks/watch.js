var gulp = require('gulp'),
    config = require('../config')

gulp.task('watch', function () {
    gulp.watch(config.lint.all, ['build']);
});
