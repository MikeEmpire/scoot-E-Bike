$(document).ready(function() {

    $("[data-media]").on("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        var videoUrl = $this.attr("data-media");
        var popup = $this.attr("href");
        var $popupIframe = $(popup).find("iframe");

        $popupIframe.attr("src", videoUrl);

        $this.closest(".page").addClass("show-popup");
    });

    $(".popup").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        $(".page").removeClass("show-popup");
    });

    $(".popup > iframe").on("click", function(e) {
        e.stopPropagation();
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