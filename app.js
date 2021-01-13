// 取模組
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const post = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(res)
})

app.post('/', (req, res) => {
  console.log(res.body)
  res.send('hello')
})

// 監聽伺服器
app.listen(post)
