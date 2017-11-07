$(function() {
    var $inputField = $( ".np-form" );
    var $npItem = $('.np-item');

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


    $npItem.each(function () {
        $(this).find('.edit-mode').css('transform', 'translateY(' + -$(this).height() + 'px)');
    });

    $npItem.on( "click", function() {
        $('.np-item').removeClass('active');
        $('.not-relevant').css('margin-top', 0);
        $(this).addClass('active');

        if($(this).hasClass('active')) {
            $(this).find('.not-relevant').css('margin-top', -$(this).find('.not-relevant').height());
        }
    });
});