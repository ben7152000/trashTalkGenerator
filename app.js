// 取模組
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const trashTalkGenerator = require('./trash-talk')
const post = 3000

// 設定 body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 設定靜態網頁
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// 取路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定請求
app.post('/', (req, res) => {
  const trashTalk = trashTalkGenerator(req.body)
  res.render('index', { trashTalk })
})

// 監聽伺服器
app.listen(post)
