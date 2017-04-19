Dropzone.autoDiscover = false;
jQuery(document).ready(function($) {

	// for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
    });

    // for a full-screen slider
    $(window).on('load resize', function() {
        var slider          = $('.swiper-container'),
            headerHeight    = $('.headerWrap').outerHeight(),
            winHeight       = $(window).height(),
            sliderHeight    = winHeight - headerHeight;

        slider.height(sliderHeight).removeClass('custom-width');

        setTimeout(function () {
            slider.addClass('custom-width');
        }, 2000);
    });

    // for popups
    $('.popup-open').on('click', function(){
        var url  = $(this).attr('href'),
            hash = url.substring(url.indexOf('#')+1);

        $('#'+hash).fadeIn(500);
    });
    $('.termsFullWrap .closePopup').on('click', function(){
        $(this).parents('.termsFullWrap').fadeOut(500);
    });
    $('.termsFullWrap').on('click', function(e){
        if (e.target !== this)
            return;
        $(this).fadeOut(500);
    });

    // for dropzone
    $("#my-awesome-dropzone").dropzone({
        url: "/file-upload",
        addRemoveLinks: true
    });

});