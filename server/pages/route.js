const route = require('express').Router()

route.use('/_api', require('./_api/route'))
route.use('/admin', require('./admin/route'))

module.exports = route