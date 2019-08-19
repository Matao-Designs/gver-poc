var
  gulp = require('gulp'),
  shelljs = require('shelljs'),
  yargs = require('yargs');

shelljs.config.fatal = true;

gulp.task('watch', ['dev']);
gulp.task(
  'dev',
  'Execute certain tasks on file save, then immediately reload all browsers serving the project.',
  ['all'], function () {
  browsersync.init({
    open: !(yargs.argv.dontopen || yargs.argv.d),
    server: {
      baseDir: 'build'
    }
  }, function () {
    gulp.watch('src/css/**/*.scss', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/svg/**/*.svg', ['svg']);
    gulp.watch('src/twig/**/*.twig', ['html']);
  });
}, {
  options: {
    'dontopen or -d': ' Tells browser-sync you don\'t want to open automatically.'
  }
}, {
  aliases: ['watch']
});
