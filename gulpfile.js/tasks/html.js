var
  fs = require('fs'),
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
    removeStyleLinkTypeAttributes = false,

    mockPayload = JSON.parse(fs.readFileSync('./src/json/mock-cms-payload.json')),
    mockPayload = mockPayload.elements,
    cmsData = cmsTitle = cmsShortDescription = {};

  if (yargs.argv.prod || yargs.argv.p) {
    collapseWhitespace =
    processConditionalComments =
    removeComments =
    removeRedundantAttributes =
    removeScriptTypeAttributes =
    removeStyleLinkTypeAttributes = true;
  }

  for (var obj in mockPayload) {
    var thisObj = mockPayload[obj];

    if (thisObj.hasOwnProperty('name') && thisObj.name === 'Title') {
      cmsTitle = {'title': thisObj};
    }

    if (thisObj.hasOwnProperty('name') && thisObj.name === 'ShortDescription') {
      cmsShortDescription = {'shortDescription': thisObj};
    }
  }

  cmsData = {'cms': Object.assign(cmsTitle, cmsShortDescription)};

  gulp.src('src/twig/pages/**/*.twig')
    .pipe(twig({
      data: cmsData
    }))
    .pipe(htmlmin({
      collapseWhitespace: collapseWhitespace,
      processConditionalComments: processConditionalComments,
      removeComments: removeComments,
      removeRedundantAttributes: removeRedundantAttributes,
      removeScriptTypeAttributes: removeScriptTypeAttributes,
      removeStyleLinkTypeAttributes: removeStyleLinkTypeAttributes
    }))
    .pipe(gulp.dest('build'))
    .pipe(browsersync.stream());
}, {
  options: {
    'prod or -p': ' Optional flag to compile for Prod.'
  }
});
