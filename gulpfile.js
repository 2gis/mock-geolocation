var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('uglify', function() {
    return gulp.src('src/geolocate.js')
        .pipe(uglify())
        .pipe(rename('geolocate.min.js'))
        .pipe(gulp.dest('src'));
});

gulp.task('default', ['uglify']);