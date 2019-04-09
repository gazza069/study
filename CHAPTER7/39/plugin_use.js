Vue.conponent('my-conponent', {
    template: '<div>{{ scrollY }}</div>',
    computed: {
        scrollY: function() { return this.$window.scrollY }
    }
})