// 設定亂數 function
function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function trashTalkGenerator () {
  // 定義變數
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['拉個贊助', '降低成本', '擴張公司', '招娉人才']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 設定空陣列
  let collection = ''

  const options = {
    engineer: 'on',
    designer: 'on',
    founder: 'on'
  }

  // 設定勾選
  if (options.engineer === 'on') {
    collection = '工程師' + sample(task.engineer) + sample(phrase)
  }

  if (options.designer === 'on') {
    collection = '設計師' + sample(task.designer) + sample(phrase)
  }

  if (options.founder === 'on') {
    collection = '企業家' + sample(task.founder) + sample(phrase)
  }

  if (collection.length === 0) {
    return '請選擇一個職業'
  }

  // 回傳幹話
  return collection
}

trashTalkGenerator()
// module.exports = trashTalkGenerator
