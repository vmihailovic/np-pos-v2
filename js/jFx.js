$(function() {
    var $inputField = $( ".np-input-field" );

    $inputField.each(function (e) {
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
        $(this).parent().find("input").val('').focus();
    });


    var $npItem = $('.np-item');

    $npItem.on( "click", function() {
        $('.np-item').removeClass('active');
        $(this).addClass('active');
    });
});