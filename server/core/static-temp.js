const path = require('path')
const fs = require('@acce/promise-fs')
const handlebars = require('handlebars')

module.exports = (file = './index.hbs') => (req, resp) => {
	let parentModulePath = path.dirname(module.parent.filename)
	let hbsTemp = path.resolve(path.join(parentModulePath, file))

	console.log('Requesting', parentModulePath, file)

	fs.readFile(hbsTemp, 'utf8')
		.then(hbs => handlebars.compile(hbs))
		.then(tmp => resp.send(tmp({})))
}