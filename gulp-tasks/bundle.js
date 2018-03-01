const gulp = require('gulp')
const browserify = require('browserify')
const ractivate = require('ractivate')
const stream = require('vinyl-source-stream')

gulp.task('bundle', done => {
	var entriesArr = [];
	entriesArr.push('./src/components/index.js');

	return browserify({
		entries: entriesArr,
		extentions: ['.js', '.hbs']
	})
		.transform({ extensions: ['.hbs'] }, ractivate)
		.bundle()
		.on('error', e => console.error(e))
		.pipe(stream('main.js'))
		.pipe(gulp.dest('./public/js/'));
})