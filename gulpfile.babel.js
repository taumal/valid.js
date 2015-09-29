/**
*
* Gulpfile for validate.js
*
* @author Daniel Leite de Oliveira <dleitee@gmail.com>
*
*/

import gulp from 'gulp'
import uglify from 'gulp-uglify'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'

gulp.task('browserify', () => {
  browserify({
    entries: './src/validate.js',
    transform: [babelify],
    // Generate a UMD bundle for the supplied export name.
    // This bundle works with other module systems and sets the name
    // given as a window global if no module system is found.
    standalone: 'validate',
    // Enable source maps that allow you to debug your files
    // separately.
    debug: true
  })
  .bundle()
  .pipe(source('validate.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
})


gulp.task('default', ['browserify'], () => {})
