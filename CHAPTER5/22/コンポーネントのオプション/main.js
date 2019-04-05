Vue.component('my-component', {
    // テンプレート
    template: '<p>{{ message }}</p>',
    // データはオブジェクトを返す関数にする
    data: function() {
        return {
            message: 'Hello Vue.js'
        }
    },
    methods: {
        // メソッドや算出プロパティ、ウォッチャなどの定義方法は
        // ルートコンストラクタのオプションと同じ
    }
})
