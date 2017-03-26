$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() < 450) {
            $(".text-wrapper").css("display", "none");
        } else {
            $('.text-wrapper').fadeIn("slow", function() {
                $(".text-wrapper").css("display", "inherit");
            });
        }
    });
    var video = $("#bgvid"),
        pageWidth = document.body.clientWidth,
        pageHeight = document.body.clientHeight,
        header = $("#titleText");
    button = $(".btn-get-started");
    $('.tlt').textillate({ in: { effect: 'bounceInRight' } });

    function changeAnimation() {
        header.removeClass("tlt");
        header.css("animation", "bobble 3s infinite");
    }
    setInterval(changeAnimation, 4000);
});