var app = new Vue({
    el: '#app',
    mounted: function() {
        console.log(this.$el) // -> <div id="app"></div>    
    }
})