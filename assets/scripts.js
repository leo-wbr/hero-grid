document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + 'js';

(function ($) {
  $(window).scroll(function () {
    var navigation = $('.header-bottom');
    if ($(this).scrollTop() >= 180) {
      navigation.addClass('on-scroll');
    } else navigation.removeClass('on-scroll');
  });
})(jQuery);
(function ($) {
  $(window).scroll(function () {
    var navigation = $('#header-info');
    if ($(this).scrollTop() >= 180) {
      navigation.addClass('on-scroll');
    } else navigation.removeClass('on-scroll');
  });
})(jQuery);

// GSAP

let images = document.querySelectorAll('.front #header_left img');
let tl = gsap.timeline({
  immediateRender: false,
  repeat: 0,
});

images.forEach(function (el) {
  tl.to(el, {
    autoAlpha: 0.7,
    y: 0,
    ease: 'power3.inOut',
  }).to(el, {});
});

// tl.to(images, {
//   autoAlpha: 1,
//   ease: 'elastic.out(1,0.3)',
//   stagger: {
//     amount: 1,
//     from: 'random',
//     grid: 'auto',
//   },
// });
