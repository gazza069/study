// メッセージ一覧用コンポーネント
Vue.component('comp-board', {
    template: '<div>Message Board</div>'
})
// 入力フォーム用コンポーネント
Vue.component('comp-form', {
    template: '<div>form<text-area v-model="message"></textarea></div>',
    data: function() {
        return { message: '' }
    }
})
new Vue({
    el: '#app',
    data: {
        current: 'comp-board' // 動的に切り替える
    }
})

