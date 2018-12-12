import Vue from 'vue'
import dayjs from 'dayjs'

export default (_, inject) => {
  /**
   * 1. 好きな形式で出力できること
   */
  const TEMPLATE = 'YYYY/MM/DD HH:mm:ss'
  const format = (date, template) => dayjs(date).format(template)
  Vue.filter('formatByDayjs', (date, template = TEMPLATE) => format(date, template))
  inject('formatByDayjs', (date, template = TEMPLATE) => format(date, template))

  /**
   * 2. 日付の加算と減算ができること
   */
  inject('addDaysByDayjs', (date, amount = 0, template = 'yyyy/MM/dd') => {
    return dayjs(date).add(amount, 'days').format(template)
  })

  /**
   * 3. 2つの日付の差を計算できること
   */
  inject('dayCountByDayjs', (date1, date2) => {
    return dayjs(date2).diff(dayjs(date1), 'days')
  })
}
