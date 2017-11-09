function labelAnimation(el) {

    $(el).each(function () {
        if ($(this).find("input").val()) {
            $(this).addClass('active');
        }
    });

    $(el).on( "focusin", "input", function() {
        $(this).parent().addClass('active');
    });

    $(el).on( "focusout", "input", function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('active');
        }
    });

    $(el).on( "click", ".reset", function() {
        if (!$(this).parent().find('input').val()) {
            $(this).parent().find('input').blur();
        }
        else {
            $(this).parent().find("input").val('').focus();
        }
    });
}