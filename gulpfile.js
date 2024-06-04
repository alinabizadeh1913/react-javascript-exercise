const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sassToCss',async function () {
    gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
})

gulp.task('sass', async function () {
    gulp.src('./Javascript/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./Javascript/assets/css/'))
})

gulp.task('watch', async function () {
    gulp.watch('./src/sass/*.scss',gulp.series('sassToCss'));
    gulp.watch('./Javascript/assets/sass/*.scss',gulp.series('sass'));
})

gulp.task('default', gulp.parallel('sassToCss','sass','watch'));