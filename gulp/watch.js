'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let sourcemaps = require('gulp-sourcemaps');
  console.log(config.directories);
  console.log(path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'));

  // Watch task
  gulp.task('watch', () => {
    // Styles
    gulp.watch([
      path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
      path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
    ], ['sass']);

    // JS
    gulp.watch([
      path.join('src/_scripts/*.js')
    ], ['js', 'build', 'browserSync', 'watch']);

    // Jade Templates
    gulp.watch([
      path.join(dirs.source, '**/*.jade'),
      path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
    ], ['jade']);

    // Copy
    gulp.watch([
      path.join(dirs.source, '**/*'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
      '!' + path.join(dirs.source, '**/*.jade')
    ], ['copy']);

    // Images
    gulp.watch([
      path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
    ], ['imagemin']);

    

    // All other files
    gulp.watch([
      path.join(dirs.temporary, '**/*'),
      '!' + path.join(dirs.temporary, '**/*.{css,map,html,js}')
    ]).on('change', browserSync.reload);


    gulp.task('js', function(done) {
      return gulp.src('src/_scripts/main.js')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('tmp/scripts/'))
    });
  });
}


