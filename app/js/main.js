$(function(){
 
    $(".workers_slider").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1021,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $(".header_inner_menu").on("click", function(){
        $(".header_menu").addClass("active");
    });
    $(".close_btn").on("click", function(){
        $(".header_menu").removeClass("active");
    });

    new WOW().init();


});

