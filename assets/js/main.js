$(document).ready(function() {

    var video = $("#bgvid");

    $('.tlt').textillate({ in: { effect: 'bounceInRight' } });

    function fadeIn() {
        $("#titleP").fadeIn("slow", function() {
            $("#titleP").css("display", "inherit");
        });
    }

    setTimeout(fadeIn, 5000);
});