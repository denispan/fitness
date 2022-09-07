// Swiper 7.4.1
import './vendor/swiper';


const sliderTrainers = new Swiper('.trainers__slider', {
  // // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // Default parameters
  slidesPerView: 4,
  spaceBetween: 40,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    790: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
