<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
    <hr>
    <div id="out" class="out" v-on:click="a_event">A
      <div id="mid" class="mid" v-on:click.self="b_event">B
        <div id="in" class="in" v-on:click="c_event">C
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String, 
  },
  data: function(){
    return {
      message: '',
    };
  },
  methods: {
    a_event: function(event){
      this.message += "A-Event [" + event.target.id 
        + ' → ' + event.currentTarget .id + "]\n";
    },
    b_event: function(event){
      this.message += "B-Event [" + event.target.id 
        + ' → ' + event.currentTarget .id + "]\n";
    },
    c_event: function(event){
      this.message += "C-Event [" + event.target.id 
        + ' → ' + event.currentTarget .id + "]\n";
    },
    clear: function(){
      this.message = '';
    }
  },
}
</script>

<style>
div {
  margin:0;
  padding: 0;
  text-align:left;
}
h1 {
  font-size:72pt;
  font-weight:bold;
  text-align:right;
  letter-spacing:-8px;
  color:#f0f0f0;
  margin:0;
}
p {
  margin:0;
  color:#666;
  font-size:16pt;
}
pre {
  font-size: 14pt;
  line-height: 1.25;
}
div.out {
  padding: 5px 0;
  background-color: #eee;
  width:300px;
  height:200px;
}
div.mid {
  padding: 5px 0;
  background-color: #ddd;
  width:200px;
  height:175px;
}
div.in {
  padding: 5px 0;
  background-color: #ccc;
  width:100px;
  height:150px;
}
</style>
