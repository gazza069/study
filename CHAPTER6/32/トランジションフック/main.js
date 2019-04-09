new Vue({
    el: '#app',
    methods: {
        enter: function(el, done) {
            console.log('enter')
            setTimeout(done, 1000)
        }
    },
    afterEnter: function(el) {
        console.log('afterEnter')
    }
})

