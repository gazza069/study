var app = new Vue({
    el: '#app',
    data: {
        list:[]
    },
    watch: {
        list: function() {
            // 更新後のulの高さを取得できない・・・
            console.log('通常:', this.$refs.list.offsetHeight)
            // nextTickをつかえばできる
            this.$nextTick(function() {
                console.log('nextTick', this.$refs.list.offsetHeight)
            })
        }
    }
})

