$(document).ready(function() {

    var menuOpen = false;
    $('.header__link--menu').click(function() {
        if (!menuOpen) {
            $('.site-nav').css({'height': $('.site-nav__container').height() + 6});
            menuOpen = true;
        } else {
            $('.site-nav').css({'height': 0});
            menuOpen = false;
        }
    });







});
