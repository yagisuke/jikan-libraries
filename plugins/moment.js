import Vue from 'vue'

export default ({ app }, inject) => {
  /**
   * 1. 好きな形式で出力できること
   */
  const TEMPLATE = 'YYYY/MM/DD HH:mm:ss'
  const format = (date, template) => app.$moment(date).format(template)
  Vue.filter('formatByMoment', (date, template = TEMPLATE) => format(date, template))
  inject('formatByMoment', (date, template = TEMPLATE) => format(date, template))

  /**
   * 2. 日付の加算と減算ができること
   */
  inject('addDaysByMoment', (date, amount = 0, template = 'YYYY/MM/DD') => {
    return app.$moment(date).add(amount, 'days').format(template)
  })

  /**
   * 3. 2つの日付の差を計算できること
   */
  inject('dayCountByMoment', (date1, date2) => {
    return app.$moment(date2).diff(app.$moment(date1), 'days')
  })
}
