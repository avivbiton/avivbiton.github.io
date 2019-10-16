$(document).ready(function () {

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

    }


    const animatedElements = $(".animated");
    $(window).scroll(animate)
    animate();
    function animate() {
        animatedElements.each(function (ele, index) {
            if (isScrolledIntoView(this) === true) {
                const element = $(this);
                const anim = element.attr("anim");
                if (anim && element.hasClass(anim) === false) {
                    element.addClass(anim);
                    animatedElements.splice(index, 1);

                }
            }

        });
    }
});


