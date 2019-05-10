<template>
  <div class="contents">
    <nav class="gnavi">
      <ul>
        <li>Topページ</li>
        <li><router-link to="/kouenji">高円寺</router-link></li>
        <li><router-link to="/other">その他</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'page_title',
  data () {
    return {
      page_title: 'Shop App'
    }
  }
}
</script>

<style scoped>
@import './common.css';
</style>
