export default {
    created() {
        // ストアの状態を取得
        console.log(this.$store.count)
        // ストアの状態を更新
        this.$store.commit('increment')
    }
}