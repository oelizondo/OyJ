var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch');

gulp.task('sass', function(){
    gulp.src('css/*.scss')
    .pipe(watch('css/*.scss'))
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['sass']);
