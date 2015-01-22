var gulp = require('gulp'),
    inject = require('gulp-inject'),
    config = require('../config');

gulp.task('runner',function() {
 var target = gulp.src(config.runner.src.html);
 var jsfiles = gulp.src(config.runner.src.js,{read:false});
 var testfile = gulp.src(config.runner.src.test,{read:false});

 target
 .pipe(inject(jsfiles,{name:'lib'}))
 .pipe(inject(testfile,{name:'test'}))
 .pipe(gulp.dest('./test'))
});
