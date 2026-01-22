const router = require('express').Router()
const { createPix } = require('../services/pix.service')
router.post('/pay', createPix)
module.exports = router