const route = require('express').Router()

route.use('/interface', require('./interface/route.js'))
route.use('/input', require('./input/route.js'))

module.exports = route