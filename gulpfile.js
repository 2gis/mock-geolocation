var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('uglify', function() {
    return gulp.src('src/geolocate.js')
        .pipe(uglify())
        .pipe(rename('geolocate.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    return gulp.src('src/geolocate.js')
        .pipe(gulp.dest('dist'));
})

gulp.task('default', ['uglify', 'copy']);
