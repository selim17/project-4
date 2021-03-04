$(function () {

    //menu top fixt
    var navtop = $(".menu_part").offset().top;

    $(window).scroll(function () {

        var scrol = $(this).scrollTop();
        if (scrol >= navtop) {
            $(".menu_part").addClass("fixtop");
        } else {
            $(".menu_part").removeClass("fixtop");
        }


    });
    
    
    


    //animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top - 60
                }, 1000);
                return false;
            }
        }
    });


    //fullBackground
    $('.fullBackground').fullClip({
        images: ['images/banner.jpg', 'images/bgc.4.png', 'images/bgc.9.jpg', 'images/bgc11.jpg', 'images/background-image.jpg', 'images/homebg.jpg'],
        transitionTime: 2000,
        wait: 5000
    });
    
    
    
    
    //wow js
    new WOW().init();


    //counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // light box js
    $('.venobox').venobox({
        spinner: 'wave',
        closeBackground: '#02918c',
        titleBackground: '#02918c',
        spinColor: '#02918c',
        arrowsColor: '#02918c',

    });

    //Slick Slider
    $('.about_inners').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        infinite: true,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow',
    });

});
