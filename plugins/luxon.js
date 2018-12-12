import Vue from 'vue'
import { DateTime } from 'luxon'

export default (_, inject) => {
  /**
   * 1. 好きな形式で出力できること
   */
  const TEMPLATE = 'yyyy/MM/dd HH:mm:ss'
  const format = (ms, template = TEMPLATE) => DateTime.fromMillis(ms).toFormat(template)
  Vue.filter('formatByLuxon', (ms, template) => format(ms, template))
  inject('formatByLuxon', (ms, template) => format(ms, template))

  /**
   * 2. 日付の加算と減算ができること
   */
  inject('addDaysByLuxon', (ms, amount = 0, template = 'yyyy/MM/dd') => {
    return DateTime.fromMillis(ms).plus({ amount }).toFormat(template)
  })

  /**
   * 3. 2つの日付の差を計算できること
   */
  inject('dayCountByLuxon', (ms1, ms2) => {
    const start = DateTime.fromMillis(ms1)
    const end = DateTime.fromMillis(ms2)
    return Math.floor(end.diff(start, 'days').days)
  })
}
