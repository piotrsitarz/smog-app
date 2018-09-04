var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber'),
    pump = require('pump'),
    concatCss = require('gulp-concat-css');

gulp.task('default', function() {
  console.log('Gulp js is running');
});

// gulp.task('jsMinify', function() {
//    return gulp.src('.././src/js/*.js')
//                .pipe(uglify())
//                .pipe(gulp.dest('js'));
// });


gulp.task('js-concat', function() {
    return gulp.src(['./js/dev/app.js', './js/dev/controllers/*.controller.js', './js/dev/services/*.service.js'])
	    .pipe(plumber())
			.pipe(concat('app-concated.js', {newLine: ';'}))
			.pipe(ngAnnotate({add: true}))
	    .pipe(plumber.stop())
      .pipe(gulp.dest('js/dev/'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./js/dev/application.min.js'),
        uglify(),
        gulp.dest('./js')
    ],
    cb
  );
});

gulp.task('app-css', function() {
   return gulp.src('./css/*.css')
     .pipe(concatCss("/styles.min.css"))
     .pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: true
     }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('minify',['jsMinify', 'cssMinify']);
