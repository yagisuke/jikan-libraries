<template>
  <div>
    <h1>moment</h1>
    <div class="container">
      <p><b>GitHub</b>: <a href="https://github.com/moment/moment/" target="_blank">https://github.com/moment/moment/</a></p>
      <p><b>Document</b>: <a href="https://momentjs.com/" target="_blank">https://momentjs.com/</a></p>
    </div>
    <div class="container">
      <h2>1. 好きな形式で日付時刻をフォーマットする</h2>
      <p><b>現在時刻(filter)</b>: {{ Date.now() | formatByMoment }}</p>
      <p><b>現在時刻(computed)</b>: {{ format }}</p>
    </div>
    <div class="container">
      <h2>2. 日付の加算と減算ができること</h2>
      <p><b>減算(3日前)</b>: {{ threeDaysAgo }}</p>
      <p><b>加算(3日後)</b>: {{ threeDaysLater }}</p>
    </div>
    <div class="container">
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
      return this.$formatByMoment(Date.now(), 'YYYY年MM月DD日 HH時mm分ss秒')
    },
    threeDaysAgo: function() {
      return this.$addDaysByMoment(Date.now(), -3)
    },
    threeDaysLater: function() {
      return this.$addDaysByMoment(Date.now(), 3)
    },
    elapsedDays: function() {
      return this.$dayCountByMoment(Date.now(), '1964-10-10 10:00:00')
    },
    remainingDays: function() {
      return this.$dayCountByMoment('2020-07-24', Date.now())
    }
  }
}
</script>
