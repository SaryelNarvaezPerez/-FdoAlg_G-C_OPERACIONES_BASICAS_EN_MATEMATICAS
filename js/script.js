$(document).ready(function() {
    $(window).scroll(function() {
        let barra = $(window).scrollTop();
        let posicion = barra * 0.1;

        $('body').css({
            'background-position': '0 -' + posicion + 'px'
        });
    });
});