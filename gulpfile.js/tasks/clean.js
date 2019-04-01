var
  gulp = require('gulp'),
  shelljs = require('shelljs'),
  yargs = require('yargs');

gulp.task('clean', 'Clean up files created from other tasks. Requires an option to be used.', function () {
  var allTheThings = yargs.argv.all || yargs.argv.a;

  if (allTheThings || yargs.argv.build || yargs.argv.b) {
    shelljs.exec('rm -rf build/');
  }

  if (allTheThings || yargs.argv.css || yargs.argv.c) {
    shelljs.exec('rm -rf build/css/');
  }

  if (allTheThings || yargs.argv.js || yargs.argv.j) {
    shelljs.exec('rm -rf build/js/');
  }

  if (allTheThings || yargs.argv.node || yargs.argv.n) {
    shelljs.exec('rm -rf node_modules/');
  }

  if (allTheThings || yargs.argv.svg || yargs.argv.s) {
    shelljs.exec('rm -rf src/twig/svg/');
  }
}, {
  options: {
    'all or -a': ' Flag to clean all of the things.',
    'build or -b': ' Flag to clean all build files.',
    'css or -c': ' Flag to clean compiled CSS files.',
    'js or -j': ' Flag to clean compiled JS files.',
    'node or -n': ' Flag to clean node files.',
    'svg or -s': ' Flag to clean SVG files.'
  }
});
