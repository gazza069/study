var app = new Vue({
    el: '#app',
    data: {
        name: 'キマイラ',
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    },
    methods: {
        // ボタンのクリックイベントのハンドラ
        doAttack: function(index) {
            this.list[index].hp -= 10 // HPを減らす
        }
    }
    
})