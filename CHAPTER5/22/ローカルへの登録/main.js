var myComponent = {
    template: '<p>MyComponent</p>'
}
new Vue({
    el: '#app',
    components: {
        // <my-component>がルートでのみ使用可能になる
        //　左辺はケバブケース以外でも可
        'my-component': myComponent
    }
})