$(document).ready(function () {

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

    }


    $(window).scroll(animate);

    $(".animated").each(function () {
        const element = $(this);
        if (element.hasClass("hide-anim") === false) {
            element.addClass("hide-anim");
        }
    });


    animate();

    function animate() {
        $(".animated").each(function () {
            const element = $(this);
            if (isScrolledIntoView(this) === true) {
                const anim = element.attr("anim");
                if (anim && element.hasClass(anim) === false) {
                    element.addClass(anim);
                    element.removeClass("hide-anim");
                }
            }

        });
    }
});


