const express = require('express')
const router = express.Router()

// 加入 home
const home = require('../routes/modules/home')

router.use('/', home)

module.exports = router
