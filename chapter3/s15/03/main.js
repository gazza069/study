
$(document).on('click', '[data-update]', function () {
    $('#message').val($(this).attr('data-update'))
    // 入力値を更新したらイベントを発生させる
    $('#message')[0].dispatchEvent(new Event('input'))
})

var app = new Vue({
    el: '#app',
    methods: {
      handleInput: function (event) {
        console.log(event.target.value)
      }
    }
})
