<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">lab-date-fns</h1>
      <h2 class="subtitle">{{ time | formatDatetime }}</h2>
      <div class="links">
        <a href="https://github.com/date-fns/date-fns/" target="_blank" class="button--green">date-fnsとは</a>
        <a href="https://github.com/yagisuke/lab-jikan/tree/master/lab-date-fns" target="_blank" class="button--grey">このソース</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import format from 'date-fns/format'

export default {
  components: {
    Logo
  },
  filters: {
    formatDatetime: (time) => format(time, 'YYYY-MM-DD HH:mm')
  },
  data: function() {
    return {
      time: Date.now()
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
