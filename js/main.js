$(document).ready( () => {
    /*------------- Navbar Shrink --------------*/
    $(window).on("scroll", () => {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    /*------------- Video Popup --------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup-close").on("click", () => {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == "") {
                $("#player-1").attr("src", videoSrc);
            }
        }
    })
});
