<template>
  <div class="contents">
    <nav class="gnavi">
      <ul>
        <li><router-link to="/">Topページ</router-link></li>
        <li><router-link to="/kouenji">高円寺</router-link></li>
        <li><span>その他</span></li>
      </ul>
    </nav>
    <h2>{{ page_title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'page_title',
  data () {
    return {
      page_title: 'その他'
    }
  }
}
</script>

<style scoped>
@import './common.css';
</style>
