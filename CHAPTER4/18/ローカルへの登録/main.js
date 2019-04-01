

var app = new Vue({
    el: '#app',
    data: {
        price: 19800
    },
    filters: {
        localNum: function(val) {
            return val.toLocaleString()
        }
    }
})

