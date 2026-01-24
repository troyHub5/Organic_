const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  spacebetween: 50,
  slidePerView: 1,
  speed: 800,
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },

   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});