'use strict'

var gulp = require("gulp");
var connect = require("gulp-connect");

var htmlSrc = 'index.html';


gulp.task('html', function(){
    gulp.src(htmlSrc)
        .pipe(connect.reload());
});

gulp.task('connect',function(){
    connect.server({
        livereload: true
    });
});

gulp.task('watch',function(){
    gulp.watch('index.html', ['html']);
});

gulp.task('default',['html','watch','connect']);