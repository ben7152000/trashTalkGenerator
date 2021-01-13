// 取模組
const express = require('express')
const app = express()

const post = 3000

// 導入路由
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello')
})

// 監聽伺服器
app.listen(post)
