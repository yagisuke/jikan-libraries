<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">lab-jikan</h1>
      <section>
        <h2 class="subtitle">moment</h2>
        <p>{{ time | formatMoment }}</p>
      </section>
      <section>
        <h2 class="subtitle">date-fns</h2>
        <p>{{ time | dateFnsFormat }}</p>
      </section>
      <section>
        <h2 class="subtitle">dayjs</h2>
        <p>{{ time | dayjsFormat }}</p>
      </section>
      <section>
        <h2 class="subtitle">luxon</h2>
        <p>{{ time | luxonFormat }}</p>
      </section>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

import moment from 'moment'
import format from 'date-fns/format'
import dayjs from 'dayjs'
import { DateTime } from 'luxon'

export default {
  components: {
    AppLogo
  },
  filters: {
    formatMoment: (time) => moment(time).format('YYYY-MM-DD HH:mm'),
    dateFnsFormat: (time) => format(time, 'YYYY-MM-DD HH:mm'),
    dayjsFormat: (time) => dayjs(time).format('YYYY-MM-DD HH:mm'),
    luxonFormat: (time) => DateTime.fromMillis(time).toFormat('D HH:mm')
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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
