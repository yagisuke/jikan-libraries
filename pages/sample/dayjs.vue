<template>
  <div>
    <h1>dayjs</h1>
    <div class="wrapper">
      <p><b>GitHub</b>: <a href="https://github.com/iamkun/dayjs" target="_blank">https://github.com/iamkun/dayjs</a></p>
      <p><b>Document</b>: <a href="https://github.com/iamkun/dayjs/blob/master/docs/ja/README-ja.md" target="_blank">https://github.com/iamkun/dayjs/blob/master/docs/ja/README-ja.md</a></p>
    </div>
    <div class="wrapper">
      <h2>1. 好きな形式で日付時刻をフォーマットする</h2>
      <p><b>現在時刻(filter)</b>: {{ Date.now() | formatByDayjs }}</p>
      <p><b>現在時刻(computed)</b>: {{ format }}</p>
    </div>
    <div class="wrapper">
      <h2>2. 日付の加算と減算ができること</h2>
      <p><b>減算(3日前)</b>: {{ threeDaysAgo }}</p>
      <p><b>加算(3日後)</b>: {{ threeDaysLater }}</p>
    </div>
    <div class="wrapper">
      <h2>3. 2つの日付の差を計算できること</h2>
      <p><b>1964東京オリンピックからの経過日数(過去)</b>: {{ elapsedDays }}日</p>
      <p><b>2020東京オリンピックまでの残日数(未来)</b>: {{ remainingDays }}日</p>
    </div>
    <BackLink />
  </div>
</template>

<script>
import BackLink from '~/components/BackLink'

export default {
  components: { BackLink },
  computed: {
    format: function() {
      return this.$formatByDayjs(Date.now(), 'YYYY年MM月DD日 HH時mm分ss秒')
    },
    threeDaysAgo: function() {
      return this.$addDaysByDayjs(Date.now(), -3)
    },
    threeDaysLater: function() {
      return this.$addDaysByDayjs(Date.now(), 3)
    },
    elapsedDays: function() {
      return this.$dayCountByDayjs('1964-10-10', Date.now())
    },
    remainingDays: function() {
      return this.$dayCountByDayjs(Date.now(), '2020-07-24')
    }
  }
}
</script>
