function setTabs(link, el) {
    $(link).on('click', function(e){
        var index = $(this).index();
        $(el + '> div:nth-child(' + (index+1) + ')').css('transform', 'translate3d(0, 0, 0)').nextAll().css('transform', 'translate3d(100%, 0, 0)');
        $(el + '> div:nth-child(' + (index+1) + ')').prevAll().css('transform', 'translate3d(-100%, 0, 0)');
    });
}