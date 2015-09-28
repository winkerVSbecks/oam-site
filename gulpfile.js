var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('img', function() {
  return gulp.src('./img/**/*')
    .pipe(gulp.dest('./.publish/img'));
});

gulp.task('dist', function() {
  return gulp.src('./dist/**/*')
    .pipe(gulp.dest('./.publish/dist'));
});

gulp.task('deploy', ['img', 'dist'], function() {
  return gulp.src([
    './.publish/**/*',
    './index.html'
  ])
    .pipe(ghPages({
      remoteUrl: 'git@github.com:winkerVSbecks/oam-site.git'
    }));
});
