const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        480: {
        slidesPerView: 2,
        },
      }
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
