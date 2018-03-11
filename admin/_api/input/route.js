const route = require('express').Router()
const model = require('./model')

route.get('/', (req, resp) => {
	resp.send('something')
})

route.post('/_id', (req, resp) => {
	
})

module.exports = route