const router = require('express').Router()
const interface = require('../../database/models/interface')

router.all('/', (req, resp) => {
	resp.send('API Home Page')
})

router.route('/interface/list')
	.get((req, resp, next) => {
		var names = interface.__model.map(doc => doc.name) || []
		resp.json(names)
	})

router.route('/interface/:name')
	.post((req, resp, next) => {
		interface.insert({ name: req.params.name })
			.then(interface => resp.json({ ok: true, data: interface }))
	})

router.route('/interface/:interface')
	.get((req, resp, next) => {
		var interfaces = interface.findName(req.params.interface);

		if (interfaces.length) {
			resp.json(interfaces)
		} else {
			resp.json({ ok: false, msg: `no interface by the name: ${req.params.interface}` })
		}
	})

module.exports = router;