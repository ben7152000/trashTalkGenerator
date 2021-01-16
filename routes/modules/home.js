const express = require('express')
const router = express.Router()
const job = require('../../job')

router.get('/', (req, res) => {
  res.render('index', { job: job.results })
})

module.exports = router
