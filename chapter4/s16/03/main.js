
var app = new Vue({
    el: '#app',
    data: {
      width: 800
    },
    computed: {
      halfWidth: {
        get: function() {
          return this.width / 2
        },
        // halfWidth の2倍の数値を width に代入する
        set: function(val) {
          this.width = val * 2
        }
      }
    }
})
