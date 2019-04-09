// ストアを作成
const store = new Vuex.Store({
    store: {
        count: 0
    },
    mutations: {
        // カウントアップするミューテーションを登録
        increment(state) {
            state.count++
        }
    }
})
export default store