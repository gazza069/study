$(function () {
    $('.p-post-follow__radio01 input').on('change', function() {
        var radioVal = $('.p-post-follow__radio01 input:checked').val();
        var hostUrl= 'post.json';
        var JSONdata = {
            question01: radioVal   
        };
        
        $('.p-post-follow__radio02').removeClass('_is_active');

        $.ajax({
            url: hostUrl,
            type:'GET',
            dataType: 'json',
            data : JSON.stringify(JSONdata),
            timeout:1000,
            success : function(data) {
                alert("success");
                $('.p-post-follow__radio02').addClass('_is_active');
            },
            error : function(data) {
                alert("error");
            }
        });
       
    })
    $('.p-post-follow__radio02 input').on('change', function() {
        var radioVal = $('.p-post-follow__radio02 input:checked').val();
        var JSONdata = {
            question02: radioVal   
        };
        var hostUrl= 'post.json';

        $('.p-post-follow__radio03').removeClass('_is_active');

        $.ajax({
            url: hostUrl,
            type:'GET',
            dataType: 'json',
            data : JSON.stringify(JSONdata),
            timeout:1000,
            success : function(data) {
                alert("success");
                $('.p-post-follow__radio03').addClass('_is_active');
            },
            error : function(data) {
                alert("error");
            }
        });
    })
    $('.p-post-follow__radio03 input').on('change', function() {
        var radioVal = $('.p-post-follow__radio03 input:checked').val();
        var JSONdata = {
            question03: radioVal   
        };
        var hostUrl= 'post.json';

        $.ajax({
            url: hostUrl,
            type:'GET',
            dataType: 'json',
            data : JSON.stringify(JSONdata),
            timeout:1000,
            success : function(data) {
                alert("success");
            },
            error : function(data) {
                alert("error");
            }
        });
    })
})
