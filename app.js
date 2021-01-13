// 取模組
const express = require('express')
const app = express()

const post = 3000

// 取路由
app.get('/', (req, res) => {
  res.send('hello')
})

// 監聽伺服器
app.listen(post)
