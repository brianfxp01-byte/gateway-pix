const router = require('express').Router()
const { withdraw } = require('../services/withdraw.service')
router.post('/', withdraw)
module.exports = router