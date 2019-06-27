<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr/>
    <button v-on:click="doAction">
      Show/Hide
    </button>
    <br><br>
    <transition name="transit">
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title:String,
  },
  data: function() {
    return {
      message:'Transition Sample',
      flg:true,
      btn:'Hide',
    };
  },
  methods:{
    doAction: function(){
      this.flg = !this.flg;
    },
  },
}
</script>

<style>
.trans {
  width: 150px;
  background-color: #ddf;
  padding:10px;
  font-size:20pt;
}

.transit-enter-active {
  animation: anim 2.5s reverse;
}
.transit-leave-active {
  animation: anim 5.0s;
}

@keyframes anim {
  0% {
    transform: translateX(0px) translateY(0px) rotateZ(0deg);
    opacity:1.0;
    background-color: #ddf;
  }
  25% {
    transform: translateX(250px) translateY(0px) rotateZ(0deg);
    opacity:1.0;
    background-color: #fdd;
  }
  50% {
    transform: translateX(0px) translateY(-100px) rotateZ(540deg);
    opacity:1.0;
    background-color: #dfd;
  }
  75% {
    transform: translateX(250px) translateY(-100px) rotateZ(540deg);
    opacity:1.0;
    background-color: #fdf;
  }
  100% {
    transform: translateX(0px) translateY(-200px) rotateZ(1080deg);
    opacity:0;
    background-color: #fdf;
  }
}

.transit-enter-to {
  opacity: 1;
}
.transit-leave {
  opacity: 1;
}
.transit-enter, .transit-leave-to {
  transform: rotateZ(360deg);
  opacity: 0.1;
}
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
.area {
  width:300px;
  height:100px;
  background-color: #ddd;
  padding:10px;
  font-size:20pt;
}
.inner {
  color:red;
  font-size: 14pt;
}
.etc {
  color:green;
  background-color: #eee;
  font-size:12pt;
  padding:5px;
}
</style>
