var
  gulp = require('gulp'),
  shelljs = require('shelljs'),
  yargs = require('yargs');

gulp.task('all', 'Compile the entire project.', function () {
  if (yargs.argv.prod || yargs.argv.p) {
    shelljs.exec('gulp css js svg html -p');
  } else {
    shelljs.exec('gulp css js svg html');
  }
}, {
  options: {
    'prod or -p': ' Optional flag to compile for Prod.'
  }
});
