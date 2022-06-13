$(function () {
    // $(".slide_img").slick({
    //     lazyLoad: 'ondemand', // ondemand progressive anticipated
    //     infinite: true
    // });
    $('.slide_img').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });

    $('.sec3_slide_img').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });

    $(".vertical").slick({
        dots: false,
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for'
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.vertical'
    });

    // var sta = 0;
    // $('.btn_all').click(function () {
    //     if (sta == 0) {
    //         $(this).addClass('on');
    //         $('.box').addClass('on'); //C
    //         sta = 1;
    //     }
    //     else {
    //         $(this).removeClass('on');
    //         $('.box').removeClass('on');  //C
    //         sta = 0;
    //     }
    // })

    var a = 0;
    $('.head_btn').click(function () {
        if (a == 0) {
            $('.head_box').slideUp();
            $('#language_select').slideDown();
            a = 1;
        } else {
            $('.head_box').slideUp();
            a = 0;
        }
    })

    var b = 0;
    $('.zoom').click(function () {
        if (b == 0) {
            $('.head_box').slideUp();
            $('.zoom_input').slideDown();
            b = 1;
        } else {
            $('.head_box').slideUp();
            b = 0;
        }
    })

    var chart = 0;
    $('.sec1_chart').each(function () {
        var chart_li = $(this).find('li')
        $(chart_li).click(function(){
            $(chart_li).removeClass('sec1_on');
            $(this).addClass('sec1_on')
        })
    })
})