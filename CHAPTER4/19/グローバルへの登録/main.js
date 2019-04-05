var app = new Vue({
    el: '#app',
    Vue.directive('focus', {
        inserted: function(el) {
            el.focus()
        }
    })
})

