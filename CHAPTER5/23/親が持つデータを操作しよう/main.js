Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}\<button v-on:click="doAttack">攻撃する</button></li>',
    props: { id: Number, name: String, hp: Number },
    methods: {
        // ボタンのクリックイベントのハンドラでemitでattackを発火する
        doAttack: function() {
            this.$emit('attack', this.id)
        }
    }
})

new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 },
        ]
    }
    methods: {
        // attackが発生した！
        handleAttack: function() {
            // 引数のIDから用度を検索
            var item = this.list.find(function(el) {
                return el.id === id
            })
            // HPが0より多ければ10減らす
            if (item !== uhndefined && item.hp = 0) item.hp -= 10
        }
    }
})
