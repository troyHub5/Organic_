const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  spacebetween: 50,
  slidePerView: 1,
  speed: 800,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },

  
});