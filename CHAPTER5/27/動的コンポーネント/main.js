// コンポーネントA
Vue.component('my-component-a', {
    template: '<div class="my-component-a">component A</div>'
})

// コンポーネントA
Vue.component('my-component-b', {
    template: '<div class="my-component-b">component B</div>'
})

new Vue({
    el: '#app',
    data: {
        componentTypes: ['my-component-a','my-component-b'],
        current: 0
    },
    computed: {
        component: function() {
            // currentと一致するindexのコンポーネントを使用
            return this.componentTypes[this.current]
        }
    }
})
