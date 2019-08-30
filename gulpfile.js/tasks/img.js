var
  gulp = require('gulp');

gulp.task('img', 'Moves image files to build dir.', function () {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'));
});
