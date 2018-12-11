import Vue from 'vue'
import { DateTime, Interval } from 'luxon'

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
    const dt = date => typeof date === 'number' ? DateTime.fromMillis(date) : DateTime.fromISO(date)
    return Math.floor(Interval.fromDateTimes(dt(date1), dt(date2)).length('days'))
  })
}
