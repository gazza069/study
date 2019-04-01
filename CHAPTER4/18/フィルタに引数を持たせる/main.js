

var app = new Vue({
    el: '#app',
    data: {
        price: 19800
    },
    filters: {
        filter: function(message, foo, num) {
            console.log(message, foo, num)
        }
    }
})

