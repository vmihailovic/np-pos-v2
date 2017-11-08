$(function() {
    var $inputField = $( ".np-form" );

    $inputField.each(function () {
        if ($(this).find("input").val()) {
            $(this).addClass('active');
        }
    });

    $inputField.on( "focusin", "input", function() {
        $(this).parent().addClass('active');
    });

    $inputField.on( "focusout", "input", function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('active');
        }
    });

    $inputField.on( "click", ".reset", function() {
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




    var $npNavigation = $('.np-navigation');
    var $navActive = $npNavigation.find('.active');
    var $indicator = $npNavigation.append('<div class="indicator"></div>').find('.indicator');

    var $right = function(el) {
        return $npNavigation.width() - ( el.position().left + el.outerWidth() );
    };

    var $left = function(el) {
        return el.position().left;
    };

    $indicator.css({
        'left' : $left($navActive),
        'right' : $right($navActive)
    });

    $npNavigation.find('div').on( "click", function() {
        $npNavigation.find('div').removeClass('active');
        $(this).addClass('active');

        $indicator.velocity({
            "right": $right($npNavigation.find('.active')) }, { duration: 300, queue: false, easing: 'easeOutQuad'
        });
        $indicator.velocity({
            "left": $left($npNavigation.find('.active')) }, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90
        });
    });

});