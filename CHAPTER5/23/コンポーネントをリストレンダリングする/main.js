Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }}</li>\<button v-on:click="doAttack">攻撃する</button></li>',
    props: ['name', 'hp'],
    methods: {
        doAttack: function() {
            // 勝手に攻撃！
            this.hp -= 10 // -> [Vue worn] error!
        }
    }
})


new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    }
})