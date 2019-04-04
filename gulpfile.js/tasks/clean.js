var
  gulp = require('gulp'),
  shelljs = require('shelljs'),
  yargs = require('yargs');

gulp.task('clean', 'Clean up files created from other tasks. Requires an option to be used.', function () {
  var
    allTheThings = yargs.argv.all || yargs.argv.a,
    thingsToClean = '';

  if (allTheThings || yargs.argv.css || yargs.argv.c) {
    thingsToClean += ' build/css/';
  }

  if (allTheThings || yargs.argv.js || yargs.argv.j) {
    thingsToClean += ' build/js/';
  }

  if (allTheThings || yargs.argv.build || yargs.argv.b) {
    thingsToClean += ' build/';
  }

  if (allTheThings || yargs.argv.svg || yargs.argv.s) {
    thingsToClean += ' src/twig/svg/';
  }

  if (allTheThings || yargs.argv.node || yargs.argv.n) {
    thingsToClean += ' node_modules/';
  }

  shelljs.exec('rm -rf ' + thingsToClean);
}, {
  options: {
    'all or -a': ' Flag to clean all of the things.',
    'build or -b': ' Flag to clean all build files.',
    'css or -c': ' Flag to clean only the CSS files in build.',
    'js or -j': ' Flag to clean only the JS files in build.',
    'node or -n': ' Flag to clean node modules.',
    'svg or -s': ' Flag to clean processed SVG files.'
  }
});
