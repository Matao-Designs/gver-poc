browsersync = require('browser-sync').create();

var
  gulp = require('gulp-help')(require('gulp'), {
    hideDepsMessage: [],
    hideEmpty: []
  });

require('require-dir')('./tasks');
