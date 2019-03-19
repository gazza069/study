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
        // 追加ボタンをクリックしたときのハンドラ
        doAdd: function() {
            // リスト内で1番大きいIDを取得
            var max = this.list.reduce(function(a, b) {
                return a.id > b.id ? a.id : b.id
            }, 0)
            // 新しいモンスターをリストに追加
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        }
    }
    
})