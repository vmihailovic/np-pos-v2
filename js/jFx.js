$(function() {

    var $npItem = $('.np-item');

    $npItem.each(function () {
        $(this).find('.edit-mode').css('transform', 'translateY(' + -($(this).height()-20) + 'px)');
    });

    $npItem.on( "click", function() {
        $npItem.removeClass('active');
        $('.not-relevant').css('margin-top', 0);
        $(this).addClass('active');

        if($(this).hasClass('active')) {
            $(this).find('.not-relevant').css('margin-top', -$(this).find('.not-relevant').height()-1); // -1 for IE hack
        }
    });

    $('.burger').on( "click", function() {
        $(this).toggleClass('active');
    });

    labelAnimation('.np-form');


    setTabs('.main-menu > div', '.pages');
    setTabs('.sub-menu > div', '.sections');


});



// Using setTimeout since Web-Kit and some other browsers call the resize function constantly upon window resizing.
var resizeTimer;
$(window).resize(function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        $(window).trigger('delayed-resize', e);
    }, 250);
});
