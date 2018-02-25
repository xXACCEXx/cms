const gulp = require('gulp')
const path = require('path')
const fs = require('fs')

fs.readdirSync('./gulp-tasks')
	.filter(file => path.extname(file) == '.js')
	.forEach(file => require(`./gulp-tasks/${file}`))