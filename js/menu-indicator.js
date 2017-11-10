function menuIndicator(el) {
    var $navActive = $(el).find('.active');

    if(!$(el).find('.indicator').length) {
        $(el).append('<div class="indicator"></div>');
    }

    var $indicator = $(el).find('.indicator');

    var $rightPos = function(e) {
        return $(el).width() - ( e.position().left + e.outerWidth() );
    };

    var $leftPos = function(e) {
        return e.position().left;
    };

    // on ready, set position on indicator without animation
    $indicator.css({
        'left' : $leftPos($navActive),
        'right' : $rightPos($navActive)
    });

    $(el).find('div').on( "click", function() {
        $(el).find('div').removeClass('active');
        $(this).addClass('active');

        $indicator.velocity({
            "right": $rightPos($(el).find('.active')) }, {
            duration: 100,
            queue: false,
            easing: 'easeOutQuad'
        });
        $indicator.velocity({
            "left": $leftPos($(el).find('.active')) }, {
            duration: 100,
            queue: false,
            easing: 'easeOutQuad',
            delay: 90
        });

        /* if we dont want to use velocity for animations, comment above code and use following one:
        $indicator.css({
            'left' : $leftPos($npNavigation.find('.active')),
            'right' : $rightPos($npNavigation.find('.active'))
        });
        */
    });
}