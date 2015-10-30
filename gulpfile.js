var gulp = require('gulp'),
    gutil = require('gulp-util'),
    karma = require('gulp-karma'),
    jasmine = require('gulp-jasmine'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint');

var allFiles = [
    'src/*.js',
    'spec/*.spec.js'
];

gulp.slurped = false;

gulp.task('watch', function(){    
    if(!gulp.slurped){
        gulp.watch("gulpfile.js", ["default"]);
        gulp.watch('src/**/*.js', ['test']);
        gulp.slurped = true;
    }
});

gulp.task('test', ['jshint'], function() {
    return gulp.src(allFiles)
        .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    }))
    .on('error', function(err){
        throw err;
    });
});

gulp.task('jshint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['watch']);