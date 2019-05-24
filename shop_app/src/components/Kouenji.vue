<template>
  <div class="contents">
    <nav class="gnavi">
      <ul>
        <li><router-link to="/">Topページ</router-link></li>
        <li><span>高円寺</span></li>
        <li><router-link to="/other">その他</router-link></li>
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
      page_title: '高円寺'
    }
  }
}
</script>

<style scoped>
@import './common.css';
</style>
