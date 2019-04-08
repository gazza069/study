Vue.component('comp-child', {
    template: '<button v-on:click="handelClick">イベント発火</button>',
    methods: {
        // ボタンのクリックイベントのハンドラでchild-eventを発火する
        handleClick: function() {
            this.$emit('child-event')
        }
    }
})

new Vue({
    el: '#app',
    methods: {
        // child-eventが発生した！
        parentsMeshod: function() {
            alert('イベントをキャッチ！')
        }
    }
})
