import Vue from 'vue'
import format from 'date-fns/format'
import addDays from 'date-fns/add_days'
import differenceInDays from 'date-fns/difference_in_days'

export default (_, inject) => {
  /**
   * 1. 好きな形式で出力できること
   */
  const TEMPLATE = 'YYYY/MM/DD HH:mm:ss'
  Vue.filter('formatByDateFns', (date, template = TEMPLATE) => format(date, template))
  inject('formatByDateFns', (date, template = TEMPLATE) => format(date, template))

  /**
   * 2. 日付の加算と減算ができること
   */
  inject('addDaysByDateFns', (date, amount = 0, template = 'YYYY/MM/DD') => {
    return format(addDays(date, amount), template)
  })

  /**
   * 3. 2つの日付の差を計算できること
   */
  inject('dayCountByDateFns', (start, end) => {
    return differenceInDays(end, start)
  })
}
