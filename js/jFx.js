$(function() {
    var $npForm = $(".np-form");

    $npForm.each(function () {
        if ($(this).find("input").val()) {
            $(this).addClass('active');
        }
    });

    $npForm.on( "focusin", "input", function() {
        $(this).parent().addClass('active');
    });

    $npForm.on( "focusout", "input", function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('active');
        }
    });

    $npForm.on( "click", ".reset", function() {
        if (!$(this).parent().find('input').val()) {
            $(this).parent().find('input').blur();
        }
        else {
            $(this).parent().find("input").val('').focus();
        }
    });



    var $npItem = $('.np-item');

    $npItem.each(function () {
        $(this).find('.edit-mode').css('transform', 'translateY(' + -$(this).height() + 'px)');
    });

    $npItem.on( "click", function() {
        $npItem.removeClass('active');
        $('.not-relevant').css('margin-top', 0);
        $(this).addClass('active');

        if($(this).hasClass('active')) {
            $(this).find('.not-relevant').css('margin-top', -$(this).find('.not-relevant').height()-1); // -1 for IE fix
        }
    });



    function menuIndicator(el) {
        var $npNavigation = $(el);
        var $navActive = $npNavigation.find('.active');
        var $indicator = $npNavigation.append('<div class="indicator"></div>').find('.indicator');

        var $rightPos = function(el) {
            return $npNavigation.width() - ( el.position().left + el.outerWidth() );
        };

        var $leftPos = function(el) {
            return el.position().left;
        };

        // on ready, set position on indicator without animation
        $indicator.css({
            'left' : $leftPos($navActive),
            'right' : $rightPos($navActive)
        });

        $npNavigation.find('div').on( "click", function() {
            $npNavigation.find('div').removeClass('active');
            $(this).addClass('active');

            $indicator.velocity({
                "right": $rightPos($npNavigation.find('.active')) }, { duration: 300, queue: false, easing: 'easeOutQuad'
            });
            $indicator.velocity({
                "left": $leftPos($npNavigation.find('.active')) }, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90
            });

            /* if we dont want to use velocity for animations, comment above code and use following one:
            $indicator.css({
                'left' : $leftPos($npNavigation.find('.active')),
                'right' : $rightPos($npNavigation.find('.active'))
            });
            */
        });
    }

    menuIndicator('.main-menu');
    menuIndicator('.sub-menu');


    $(window).on('delayed-resize', function () {
        menuIndicator('.main-menu');
        menuIndicator('.sub-menu');
    });

});

// Using setTimeout since Web-Kit and some other browsers call the resize function constantly upon window resizing.
var resizeTimer;
$(window).resize(function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        $(window).trigger('delayed-resize', e);
    }, 250);
});
