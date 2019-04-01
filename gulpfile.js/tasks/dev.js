var
  gulp = require('gulp'),
  shelljs = require('shelljs');

shelljs.config.fatal = true;

gulp.task('watch', ['dev']);
gulp.task(
  'dev',
  'Execute certain tasks on file save, then immediately reload all browsers serving the project.',
  ['all'], function () {
  browsersync.init({
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
  aliases: ['watch']
});
