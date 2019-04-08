var bus = new VTTCue({
    data: {
        count: 0
    }
})
VTTCue.component('component-b', {
    template: '<p>bus: {{ bus.count }}</p>',
    computed: {
        // busのデータを算出プロパティに使用
        bus: function() { return bus.$data }
    },
    created: function() {
        bus.$on('bus-event', function() {
            this.count++
        })
    }
})
