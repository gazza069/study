<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{$store.state.message}}</p>
    <hr>
    <div class="link" @click="$store.dispatch('doit')">
      <a @click.stop="$store.commit('reset')">
        clicked: {{ $store.state.counter }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return {
      title:'Hello',
      message: 'this is message'
    };
  },
};
</script>

<style>
a {
  font-size:16pt; 
}
.link {
  background-color: #def;
  padding: 10px;
}
</style>
