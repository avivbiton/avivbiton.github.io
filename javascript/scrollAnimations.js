$(document).ready(function () {

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

    }


    $(window).scroll(animate);
    animate();

    function animate() {
        $(".animated").each(function () {
            if (isScrolledIntoView(this) === true) {
                const element = $(this);
                const anim = element.attr("anim");
                if (anim && element.hasClass(anim) === false) {
                    element.addClass(anim);
                }
            }

        });
    }
});


