var
  autoprefixer = require('autoprefixer'),
  gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  yargs = require('yargs');

gulp.task('css', 'Compile SASS into CSS.', function () {
  var
    sassStyle = 'expanded',
    sassComments = true;

  if (yargs.argv.prod || yargs.argv.p) {
    sassStyle = 'compressed',
    sassComments = false;
  }

  gulp.src('src/css/app.scss')
    .pipe(sass({
      outputStyle: sassStyle,
      sourceComments: sassComments
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        'browsers': [
          '> 1%',
          'last 2 versions'
        ]
      })
    ]))
    .pipe(gulp.dest('build/css/'))
    .pipe(browsersync.stream());
}, {
  options: {
    'prod or -p': ' Optional flag to compile for Prod.'
  }
});
