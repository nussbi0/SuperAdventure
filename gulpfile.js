var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    del = require('del')

// Concat Scripts
gulp.task('concat-scripts', function() {
    return gulp.src([
        'src/js/player.js',
        'src/js/entry.js'
        ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

// Concat CSS
gulp.task('concat-css', function() {
    return gulp.src([
        'src/css/normalize.css',
        'src/css/style.css'
     ])
    .pipe(concat('stylesheet.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// HTML
gulp.task('html', function() {
    return gulp.src([
        'index.html'
    ])
    .pipe(livereload());
});

// Watch Files
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/js/*.js', ['concat-scripts'])
    gulp.watch('index.html', ['html']);
    gulp.watch('src/css/*.css', ['concat-css'])
});

// Clean
gulp.task('clean', function() {
    del(['src/js/app*.js*','src/css/stylesheet*.css*','css','js']);
});

// Build
gulp.task('build', ['concat-scripts', 'concat-css'], function() {
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});