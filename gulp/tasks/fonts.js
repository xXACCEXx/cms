const gulp = require('gulp')

gulp.task('fonts', () => {
	gulp.src('./src/icons/ionicons-2.0.1/fonts/ionicons.*')
		.pipe(gulp.dest('./public/fonts/'))
})