hideMe = (event) => {
  // console.log(this);
  event.target.classList.add('hidden');
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
  showHideElements()
});

$('a[href^="#"]:not([href="#"])').click(function(event) {  // link starts with #, but not # alone
  let hash = this.hash;
  let duration = 1000
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    if ("js-fast-scroll" in event.target.classList) {
      duration = 100
      console.log('fast scroll')
    }
    let target = $(hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
          scrollTop: target.offset().top
        },
        {
          duration: duration,
          complete: () => location.hash = hash,
        }
      );
    }
  }
});

window.onhashchange = (event) => showHideElements()
showHideElements = () => {
  let hash = location.hash
  for (let item of document.getElementsByClassName("js-hide-on-target")) {
    if (hash) {
      if (item.dataset.target == hash) {
        console.log(`hiding ${item.id}`)
        item.classList.add('hidden');
        return
      }
    }
    console.log(`showing ${item.id}`);
    item.classList.remove('hidden');
  }
}
