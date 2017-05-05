var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    gutil = require('gulp-util'),
    gulpSequence = require('gulp-sequence'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('css', function() {
    return gulp.src('scss/hamburgers.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer('last 5 versions'))
        .pipe(gulp.dest('dist'))
        .pipe(rename({suffix: '.min'}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function (callback) {
    gulpSequence('build')(callback);
    gulp.watch('scss/**/*.scss', ['build'])
});

gulp.task('build', function(callback) {
    gulpSequence('clean', ['css'])(callback);
});

gulp.task('default', ['build']);