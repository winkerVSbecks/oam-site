var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('img', function() {
  return gulp.src('./img/**/*')
    .pipe(gulp.dest('./build/img'));
});

gulp.task('index', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('deploy', ['index', 'img'], function() {
  return gulp.src(['./build/*', './build/**/*'])
    .pipe(ghPages({
      remoteUrl: 'git@github.com:winkerVSbecks/oam-site.git'
    }));
});
