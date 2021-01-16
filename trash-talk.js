// 設定亂數 function
// function sample (array) {
//   const index = Math.floor(Math.random() * array.length)
//   return array[index]
// }

function trashTalkGenerator () {
  // 定義變數
  const task = require('./job')
  // const phrase = ['很簡單', '很容易', '很快', '很正常']

  task.results.forEach(job => {
    // console.log(job.job)
  })

  // 設定空陣列
  // let collection = ''

  // const options = {
  //   engineer: 'on',
  //   designer: 'on',
  //   founder: 'on'
  // }

  // 設定勾選
  // if (options.results.job === 'on') {
  //   collection = `${task.results.job}` + sample(task.results.job) + sample(phrase)
  // }

  // if (collection.length === 0) {
  //   return '請選擇一個職業'
  // }

  // 回傳幹話
  // return collection
}

trashTalkGenerator()
// module.exports = trashTalkGenerator
