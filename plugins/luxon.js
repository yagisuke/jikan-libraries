import Vue from 'vue'
import { DateTime } from 'luxon'

export default (ctx, inject) => {
  /**
   * 1. 好きな形式で出力できること
   */
  const TEMPLATE = 'yyyy/MM/dd HH:mm:ss'
  const format = (date, template) => DateTime.fromMillis(date).toFormat(template)
  Vue.filter('formatByLuxon', (date, template = TEMPLATE) => format(date, template))
  inject('formatByLuxon', (date, template = TEMPLATE) => format(date, template))

  /**
   * 2. 日付の加算と減算ができること
   */
  inject('addDaysByLuxon', (date, days = 0) => {
    return DateTime.fromMillis(date).plus({ days }).toFormat('yyyy/MM/dd')
  })

  /**
   * 3. 2つの日付の差を計算できること
   */
  inject('dayCountByLuxon', (date1, date2) => {
    const start = DateTime.fromMillis(date1)
    const end = DateTime.fromMillis(date2)
    return Math.floor(end.diff(start, 'days').days)
  })
}
