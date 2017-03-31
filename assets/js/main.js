$(document).ready(function() {
    $(function() {
        $(".youtube").YouTubeModal({ autoplay: 0, width: 640, height: 480 });
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() < 450) {
            $(".text-wrapper").fadeOut(function() {
                $(".text-wrapper").css("display", "none");
            });
        } else {
            $('.text-wrapper').fadeIn("slow", function() {
                $(".text-wrapper").css("display", "inherit");
            });
        }
    });

    var video = $("#bgvid"),
        pageWidth = document.body.clientWidth,
        pageHeight = document.body.clientHeight,
        header = $("#titleText"),
        button = $(".btn-get-started");
    $(".cd-btn").hover(function() {
        $('#cart').fadeIn("slow", function() {
            $("#cart").css("display", "inherit");
        });
    });

    $('.tlt').textillate({ in: { effect: 'bounceInRight' } });

    function fadeIn() {
        $("#titleP").fadeIn("slow", function() {
            $("#titleP").css("display", "inherit");
        });
    }

    setTimeout(fadeIn, 5000);
    /*
        function changeAnimation() {
            header.removeClass("tlt");
            header.css("animation", "bobble 3s infinite");
        }
        setInterval(changeAnimation, 4000);
        */
});