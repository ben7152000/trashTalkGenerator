const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const trashTalkGenerator = require('../../trash-talk.js')
const job = require('../../job')

router.get('/', (req, res) => {
  res.render('index', { job: job.results })
})

// 設定 body-parser
router.use(bodyParser.urlencoded({ extended: true }))

// 設定 post router
router.post('/', (req, res) => {
  const trashTalk = trashTalkGenerator(req.body)
  res.render('index', { job: job.results, trashTalk })
})

module.exports = router
