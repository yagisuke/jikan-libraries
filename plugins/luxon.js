// import Vue from 'vue'
// import { DateTime } from 'luxon'

// Vue.prototype.$luxonDateTime = DateTime
import { DateTime } from 'luxon'

import Vue from 'vue'

Vue.filter('luxon', date => DateTime.fromMillis(date, { locale: 'ja', zone: 'Asia/Tokyo' }).toFormat('yyyy/MM/dd HH:mm'))

export default (ctx, inject) => {
  inject('luxon', (date, formatStr = 'yyyy/MM/dd HH:mm') => {
    if (!date) return date
    return DateTime.fromMillis(date).toFormat(formatStr)
  })
}

// https://qiita.com/bobu_web/items/2cecc3fdb7d2b0942ef1
// https://qiita.com/bobu_web/items/2cecc3fdb7d2b0942ef1

// ## filterとinjectで書いてみる
// 1. 好きな形式で出力できること -> millis

// ## injectで書いてみる
// 2. 日付時刻を比較できること -> isBefore
// 3. 日付時刻の差を取得できること -> isBefore
