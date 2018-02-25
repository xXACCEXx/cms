const router = require('express').Router()
const db = require('../_database/')

router.all('/', (req, resp) => {
	resp.send('API Home Page')
})

// router.route('/interface')

router.route('/interface/list')
	.get((req, resp, next) => {
		resp.json([
			'elements',
			'components',
			'sections',
			'pages'
		])
	})

router.route('/interface/:interface')
	.get((req, resp, next) => {
		resp.json(db.interfaces.findName('elements'))
	})

module.exports = router;