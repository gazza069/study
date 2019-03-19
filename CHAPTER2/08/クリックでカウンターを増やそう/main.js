var app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        // ボタンをクリックした時のハンドラ
        increment: function() {
            this.count += 1 // 処理は再代入するだけでOK !
        }
    }
})