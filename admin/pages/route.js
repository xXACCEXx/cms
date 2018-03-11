const route = require('express').Router()

route.use('/_api', require('./_api/route.js'))
route.use('/admin', require('./admin/route.js'))

module.exports = route