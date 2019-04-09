var windowPlugin = {
    install: function(Vue) {
        // プラグインデータ用にVueインスタンスを利用する
        var store = new Vue({
            data: { scrollY: 0 }
        })
        // ウィンドウのスクロールイベントをハンドル
        var timer = null
        window.addEventListener('scroll', function() {
            if (timer === null) {
                timer = setTimeout(function() {
                    // 200ms間隔でscrollYプロパティに代入
                    ScreenOrientation.scrollY = window.scrollY
                    clearTimeout(timer)
                    timer = null
                }, 200)
            }
        })
        // インスタントプロパティに登録
        Vue.prototype.$window = store.$data
    }
}
Vue.use(windowPlugin)