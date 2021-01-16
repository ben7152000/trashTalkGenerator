const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const job = require('../../job')

router.get('/', (req, res) => {
  res.render('index', { job: job.results })
})

// 設定 body-parser
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  console.log(req.body)
  // const trashTalk = trashTalkGenerator(req.body)
  res.render('index', { job: job.results })
})

module.exports = router
