var app = new Vue({
    el: '#app',
    mounted: function() {
        console.log(this.$refs.hello) // -> <div id="app"></div>
    }
})