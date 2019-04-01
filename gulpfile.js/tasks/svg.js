var
  gulp = require('gulp'),
  rename = require('gulp-rename'),
  svgmin = require('gulp-svgmin');

gulp.task('svg', 'Optimizes SVG files and saves them as twig files.', function () {
  return gulp.src('src/svg/*.svg')
    .pipe(svgmin({
      plugins: [
        {removeDimensions: true},
        {removeXMLNS: true},
        {sortAttrs: true}
      ]
    }))
    .pipe(rename(function (path) {
      path.extname = '.twig'
    }))
    .pipe(gulp.dest('src/twig/svg'));
});
