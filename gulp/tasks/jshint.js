var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');

gulp.task('jshint', function() {
    return gulp.src(config.scripts.proj)
        .pipe(plugins.jshint('.jshintrc'))
        .pipe(plugins.debug({title: 'jshint:'}))
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail'));
});
