$(document).ready(function() {

    var menuOpen = false;
    $('.header__link--menu').click(function() {
        if (!menuOpen) {
            $('.mobile-nav').css({'height': $('.mobile-nav__container').height() + 5});
            menuOpen = true;
        } else {
            $('.mobile-nav').css({'height': 0});
            menuOpen = false;
        }
    });







});
