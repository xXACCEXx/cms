const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')

gulp.task('sass', () => {
	gulp.src('./src/sass/*.scss')
		.pipe(sass({ style: 'expanded', includePaths: ['./node_modules/bulma'] }))
		.pipe(prefix('last 2 versions'))
		.pipe(cssnano())
		.pipe(gulp.dest('./public/css'))
})