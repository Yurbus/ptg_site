var $ = jQuery;

$(document).ready(function () {
    var heroSwiper = new Swiper(".js-hero", {
        loop: true,
        autoHeight: true,
    });

    var partnersSwiper = new Swiper(".js-partners", {
        slidesPerView: 2,
        // loop: true,
        grid: {
            rows: 3,
        },
        spaceBetween: 4,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            500: {
                slidesPerView: 3,
                spaceBetween: 20,
                grid: {
                    rows: 2,
                },
            },

        },
    });

})