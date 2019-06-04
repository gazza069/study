$(function () {
    var $slide = $('.slide');

    $slide.slick({
        infinite: false,
        dots: true
    });

    $slide.slick('slickFilter', function(index){
        if (index < 1){
            return $(this).eq(index);
        }
    });

    $('.p-post-follow__radio01 input').on('change', function() {
        var radioVal = $('.p-post-follow__radio01 input:checked').val();
        var hostUrl= 'post.json';
        var JSONdata = {
            question01: radioVal   
        };

        $.ajax({
            url: hostUrl,
            type:'GET',
            dataType: 'json',
            data : JSON.stringify(JSONdata),
            timeout:1000,
            success : function(data) {
                alert("success");
                $slide.slick('slickUnfilter');
                $slide.slick('slickFilter', function(index){
                    if (index < 2){
                        return $(this).eq(index);
                    }
                });
                $slide.slick('slickNext');
            },
            error : function(data) {
                alert("error");
            }
        });
       
    });

    $(document).on("change", ".p-post-follow__radio02 input", function(){
        var radioVal = $('.p-post-follow__radio02 input:checked').val();
        var JSONdata = {
            question02: radioVal   
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
                $slide.slick('slickUnfilter');
                $slide.slick('slickNext');
            },
            error : function(data) {
                alert("error");
            }
        });
    });

    $(document).on("change", ".p-post-follow__radio03 input", function(){
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
                $slide.removeClass('_is_active');
                $('.p-post-follow__complete').addClass('_is_active');
            },
            error : function(data) {
                alert("error");
            }
        });
    });
})
