$(document).ready (() => {
  $('.slider-for').slick({
    lazyLoad: 'ondemand',
    // variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
    // fade: true,
    respondTo: 'min',
    asNavFor: '.slider-nav',
    mobileFirst: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   }
    // ]
  });
  $('.slider-nav').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // variableWidth: true,
    dots: false,
    arrows: false,
    centerMode: true,
    // respondTo: 'min',
    focusOnSelect: true
  });
});
