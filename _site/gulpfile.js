var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var shell       = require('gulp-shell');

gulp.task('jekyll-watch', shell.task(['bundle exec jekyll build --incremental']));

gulp.task('webserver', function () {
    browserSync.init({
        server: "_site/.",
        port: 6969,
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/css/*.css").on('change', browserSync.reload);
    // gulp.watch('_site/**/*.*').on('change', browserSync.reload);
})

// gulp.task('serve', gulp.series('webserver'), function () {});
gulp.task('default', gulp.series('jekyll-watch', 'webserver'));