var app = new Vue({
    el: '#app',
    Vue.directive('example', {
        bind: function(el, binding) {
            console.log('v-example bind')
        },
        inserted: function(el, binding) {
            console.log('v-example inserted')
        },
        update: function(el, binding) {
            console.log('v-example update')
        },
        componentUpdated: function(el, binding) {
            console.log('v-example conponentUpdate')
        },
        unbind: function(el, binding) {
            console.log('v-example unbind')
        }
    })
})

