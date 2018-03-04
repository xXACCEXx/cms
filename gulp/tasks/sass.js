const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const source = require('vinyl-source-stream')

gulp.task('sass', () => {
	gulp.src([
		'./src/sass/*.scss',
		'./src/components/**/*.scss'
	])
		.pipe(sass({ style: 'expanded', includePaths: ['./node_modules/bulma', './src/icons'] }))
		.pipe(prefix('last 2 versions'))
		.pipe(cssnano())
		.pipe(source('main.css'))
		.pipe(gulp.dest('./public/css'))
})