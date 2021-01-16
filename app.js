// 取模組
const express = require('express')
const app = express()
const routes = require('./routes')
const exphbs = require('express-handlebars')
const post = 3000

// 渲染引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 取路由
app.use(express.static('public'))
app.use(routes)

// 監聽伺服器
app.listen(post)
