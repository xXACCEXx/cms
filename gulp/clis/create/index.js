#!/usr/bin/env node
const cmd = require('commander')
const gulp = require('gulp')
const map = require('map-stream')

const clonePath = './gulp/clis/create/clone/'

const createComponent = (name, tmp = true, style = true, partial = false) => {
	var selection = [`${clonePath}index.js`];
	if (tmp) selection.push(`${clonePath}temp.hbs`)
	if (style) selection.push(`${clonePath}style.scss`)
	if (partial) selection.push(`${clonePath}partials/**/*.hbs`)

	gulp.src(selection)
		.pipe(map((chunk, cb) => {
			chunk.contents = new Buffer(chunk.contents.toString().replace(/\{\{name\}\}/g, name))
			cb(null, chunk)
		}))
		.pipe(gulp.dest(`./src/components/${name}`))
}

const createPage = () => {

}

cmd.command('component <name>')
	.alias('comp <name>')
	.option('-t, --no-temp', 'Disable template')
	.option('-s, --no-style', 'Disable style')
	.option('-p, --partial', 'include partials')
	.action(function (name, cmd) {
		createComponent(name, cmd.temp, cmd.style, cmd.partial)
	})

cmd.parse(process.argv)