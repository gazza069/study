var app = new Vue({
    el: '#app',
    data: {
        video1: false,
        video2: false
    },
    directives : {
        video(el, binding) {
            if (binding.value !== binding.oldValue) {
                binding.value ? el.play() : el.pause()
            }
        }
    }
})

