$(document).ready(function(){

    $('.go-up').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 200);
    }); 

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('.go-up').slideDown(200);
        } else {
            $('.go-up').slideUp(200);
        }
    });

});