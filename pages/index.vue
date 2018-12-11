<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">jikan-libraries</h1>
      <ul class="libraries">
        <li><nuxt-link to="/sample/moment">momentのページ</nuxt-link></li>
        <li><nuxt-link to="/sample/dayjs">dayjsのページ</nuxt-link></li>
        <li><nuxt-link to="/sample/date-fns">date-fnsのページ</nuxt-link></li>
        <li><nuxt-link to="/sample/luxon">luxonのページ</nuxt-link></li>
      </ul>
      <div class="links">
        <a href="https://qiita.com/yagi_suke" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/yagisuke/jikan-libraries" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
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

.libraries {
  margin: 30px;
  text-align: left;
  font-size: 30px;
}

.links {
  padding-top: 15px;
}
</style>
