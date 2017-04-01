$(document).ready(function() {

    var video = $("#bgvid");
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
});