const route = require('express').Router()

route.use('/elements', require('./elements/route.js'))
route.use('/pages', require('./pages/route.js'))

module.exports = route