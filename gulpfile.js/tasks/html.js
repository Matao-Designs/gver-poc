var
  gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  twig = require('gulp-twig'),
  yargs = require('yargs');

gulp.task('html', 'Compile HTML.', function () {
  var
    collapseWhitespace =
    processConditionalComments =
    removeComments =
    removeRedundantAttributes =
    removeScriptTypeAttributes =
    removeStyleLinkTypeAttributes = false;

  if (yargs.argv.prod || yargs.argv.p) {
    collapseWhitespace =
    processConditionalComments =
    removeComments =
    removeRedundantAttributes =
    removeScriptTypeAttributes =
    removeStyleLinkTypeAttributes = true;
  }

  gulp.src('src/twig/pages/**/*.twig')
    .pipe(twig())
    .pipe(htmlmin({
      collapseWhitespace: collapseWhitespace,
      processConditionalComments: processConditionalComments,
      removeComments: removeComments,
      removeRedundantAttributes: removeRedundantAttributes,
      removeScriptTypeAttributes: removeScriptTypeAttributes,
      removeStyleLinkTypeAttributes: removeStyleLinkTypeAttributes
    }))
    .pipe(gulp.dest('build/'))
    .pipe(browsersync.stream());
});
