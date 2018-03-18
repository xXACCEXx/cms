const router = require('express').Router()
const staticHBS = require('../../../core/static-temp')

router.get('/', staticHBS())

module.exports = router