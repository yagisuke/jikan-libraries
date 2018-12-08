import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parse from 'date-fns/parse'

export default (ctx, inject) => {
  inject('date_format', (date, formatStr) => {
    if (!date) return date
    return format(parse(date), formatStr, { locale: ja })
  })
}