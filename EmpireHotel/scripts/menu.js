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