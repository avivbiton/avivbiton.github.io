$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(document).ready(function () {


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
            const animateOn = element.attr("animateOn");
            if (animateOn) {
                if ($(animateOn).isInViewport()) {
                    addAnim();
                }
            }
            else if (element.isInViewport() === true) {
                addAnim();
            }

            function addAnim() {
                const anim = element.attr("anim");
                if (anim && element.hasClass(anim) === false) {
                    element.addClass(anim);
                    element.removeClass("hide-anim");
                }
            }

        });
    }
});


