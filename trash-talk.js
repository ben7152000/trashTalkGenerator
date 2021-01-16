// 設定亂數 function
function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function trashTalkGenerator (options) {
  // 定義變數
  const task = require('./job')
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 設定空字串
  let collection = ''

  // 如果沒有選擇
  if (options.job === undefined) {
    return '請選擇一個職業'
  }

  // 比對傳進來的職業是否相同
  const job = task.results.find(item => {
    return options.job === item.job
  })

  // 產稱幹話
  collection = `${job.name}` + sample(job.task) + sample(phrase)

  // 回傳幹話
  return collection
}

module.exports = trashTalkGenerator
