$(document).ready (() => {
  $('.slider-for').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // respondTo: 'min',
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    // respondTo: 'min',
    focusOnSelect: true
  });
});
