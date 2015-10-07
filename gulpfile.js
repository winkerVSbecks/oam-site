var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var del = require('del');

gulp.task('clean', function () {
  return del([
    './build',
    './.publish'
  ]);
});

gulp.task('img', ['clean'], function() {
  return gulp.src('./img/**/*')
    .pipe(gulp.dest('./build/img'));
});

gulp.task('index', ['img'], function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['index'], function() {
  return gulp.src('./static/**/*')
    .pipe(gulp.dest('./build/static'));
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages({
      remoteUrl: 'git@github.com:winkerVSbecks/oam-site.git'
    }));
});
