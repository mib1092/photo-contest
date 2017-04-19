jQuery(document).ready(function($) {
	// for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
    });

    // for slider fullscreen display
    $(window).on('load resize', function() {
        var slider          = $('.swiper-container'),
            headerHeight    = $('.headerWrap').outerHeight(),
            winHeight       = $(window).height(),
            sliderHeight    = winHeight - headerHeight;

        slider.height(sliderHeight);

        setTimeout(function () {
            slider.addClass('custom-width');
        }, 2000);
    });
});