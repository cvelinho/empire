$(document).ready(function () {
    $('body').addClass('menu-nav');
    var $menu = $('#menu'),
    $menulink = $('.menu-link');

    

    $menulink.click(function () {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });


    $('.menu-link').click(function (e) {
        if ($(this).hasClass('active')) {
            $('html').addClass('modal-no-scroll');
        } else {
            $('html').removeClass('modal-no-scroll');
        }
    });

});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".header-logo").addClass("logo-shrink");
        $(".header-contact").addClass("hc-out");
        $(".language-wrapper").addClass("lw-out");
        $("#menu").addClass("nav-repos");
    } else {
        $(".header-logo").removeClass("logo-shrink");
        $(".header-contact").removeClass("hc-out");
        $(".language-wrapper").removeClass("lw-out");
        $("#menu").removeClass("nav-repos");

    }
});