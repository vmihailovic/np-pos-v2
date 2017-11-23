function setTabs(link, el) {
    $(link).on('click', function(e){
        var index = $(this).index();
        $(el + '> div:nth-child(' + (index+1) + ')')
            .css({
                'transform': 'translateX(0)'
            }).nextAll()
            .css({
                'transform': 'translateX(100%)'
            });

        $(el + '> div:nth-child(' + (index+1) + ')').prevAll().css('transform', 'translateX(-100%)');
    });
}