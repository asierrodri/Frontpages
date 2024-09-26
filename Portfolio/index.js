$(document).ready(
    function() {
        //3
        $(".project-gallery").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
            {
                breakpoint: 768, settings: {
                    slidesToShow: 1,
                    dots: true,
                    autoplay: false
                }
            }
            ]
        });
    }
);