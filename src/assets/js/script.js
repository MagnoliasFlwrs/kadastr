const swiper = new Swiper('.hotel-swiper', {
    loop: true,
    slidesPerView:1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.hotel-btn-next',
      prevEl: '.hotel-btn-prev',
    },
    breakpoints: {
        1024: {
          slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
      }
  });
