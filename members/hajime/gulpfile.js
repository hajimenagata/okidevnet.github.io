var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: './',
    livereload: true,
    port: 8085
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./css/'))
      .pipe(connect.reload());
});

gulp.task('livereload', function (){
  gulp.src('./index.html')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./js/*.js', ['livereload']);
  gulp.watch('./*.html', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
