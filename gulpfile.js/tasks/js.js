var
  gulp = require('gulp'),
  shelljs = require('shelljs'),
  yargs = require('yargs');

gulp.task('js', 'Compile JavaScript.', function () {
  if (yargs.argv.prod || yargs.argv.p) {
    shelljs.exec('npx webpack --mode=production');
  } else {
    shelljs.exec('npx webpack --mode=development');
    gulp.src('build/js/*.js').pipe(browsersync.stream());
  }
}, {
  options: {
    'prod or -p': ' Optional flag to compile for Prod.'
  }
});
