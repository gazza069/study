<template>
  <div id="app">
    <HelloWorld title="validate" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      message:'validate',
      num: 101,
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}
tr td {
  padding:5px;
  border:1px solid gray;
}
tr th {
  padding:5px;
  border:1px solid gray;
}
tr th.head {
  background-color: black;
  color:white;
}
</style>
