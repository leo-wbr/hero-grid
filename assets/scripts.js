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
