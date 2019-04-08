var mixin = {
    created: function() {
        this.hello()
    },
    methods: {
        hello: function() {
            console.log('hello from mixin!')
        }
    }
}

Vue.component('my-component-a', {
    mixins: [mixin], // ミックスインを登録
    template: '<p>MyComponentA</p>'
})
Vue.component('my-component-b', {
    mixins: [mixin], // ミックスインを登録
    template: '<p>MyComponentB</p>'
})

