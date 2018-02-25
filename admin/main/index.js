const router = require('express').Router()
const path = require('path')
const fs = require('@acce/promise-fs')
const handlebars = require('handlebars')

router.route('/')
	.get((req, resp) => {
		fs.readFile(path.join(__dirname, './main.hbs'), 'utf8')
			.then(hbs => handlebars.compile(hbs))
			.then(tmp => resp.send(tmp({})))
	})

module.exports = router