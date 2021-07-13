$(document).ready( () => {
    /*------------- Navbar Shrink --------------*/
    $(window).on("scroll", () => {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
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
    });

    /*------------- Features Carousel --------------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- App Screenshots Carousel --------------*/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    /*------------- Testimonial Carousel --------------*/
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- Team Carousel --------------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*------------- ScrollIt --------------*/
    $.scrollIt({
        topOffset: -50
    });
});
