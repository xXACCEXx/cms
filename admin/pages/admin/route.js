const route = require('express').Router()

route.use('/pages', require('./pages/route.js'))

module.exports = route