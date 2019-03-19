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
    created: function() {
        // すべての要素にactiveプロパティを追加したい
        this.list.forEach(function(item) {
            this.$set(item, 'active', false)
            // 「item.active = false」ではリアクティブにならない
        }, this)
    }
    
})