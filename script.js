$(document).ready(function() {

    var menuOpen = false;
    $('.nav-menu').click(function() {
        if (!menuOpen) {
            $('.mobile-nav-wrapper').addClass('mobile-nav-wrapper--active');
            menuOpen = true;
        } else {
            $('.mobile-nav-wrapper').removeClass('mobile-nav-wrapper--active');
            menuOpen = false;
        }
    });







});
