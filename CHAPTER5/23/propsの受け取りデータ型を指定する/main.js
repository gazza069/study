Vue.component('example', {
    props: {
        // 基本的な型チェック('null'はどんな型でも受け付ける)
        propA: Number,
        // 複数の受け入れ可能な型
        propB: [String, Number],
        // 必須な文字列
        propC: {
            type: String,
            required: true
        },
        
    }
})
