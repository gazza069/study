
var app = new Vue({
    el: '#app',
    data: {
      width: 800
    },
    computed: {
      // 算出プロパティhalfWidthを定義
      halfWidth: function() {
        return this.width / 2
      }
    }
})
