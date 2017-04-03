hideMe = (event) => {
  // console.log(this);
  event.target.classList.add('hidden');
}

hideContactFormButton = () => {
  document.getElementById("show-contact-form").classList.add('hidden');
}

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
  $('.papa-details').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    respondTo: 'min',
    autoplay: true
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
