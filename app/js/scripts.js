$(function() {
  $('.nav-cat').hover(function() {
    $(this)
      .toggleClass('active')
      .find('.nav-cat__list')
      .slideToggle(0);
  });
  $('.header__search-opt').on('click', function(){
    $(this).next('.header__search-pop').slideToggle(0);
  });
  $('.banner').owlCarousel({
      nav: false,
      items: 1,
      loop: false,
      dots: true,
      smartSpeed: 800,
  });
  $('.hit__in').owlCarousel({
      nav: true,
      loop: false,
      dots: true,
      smartSpeed: 800,
      startPosition: 0,

      margin: 15,
      navText: ["<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        600 : {
            items: 2
        },
        900 : {
            items: 3
        },
        1200 : {
            items: 4
        }
      },
      onTranslated: setCls,
  });
  // .on("translated.owl.carousel", setCls);
  function setCls() {
    $(".owl-item").removeClass("red").filter(".active").eq(1).addClass("red")
  }
  setCls();


  $('.hit__item-colors').owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    smartSpeed: 800,
    navText: ["<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
    margin: 5,
    items: 3,
  });
  $('.hit__item-wrp').hover(function() {
    $(this)
    .find('.hit__item-more')
    .slideToggle(0)
    .parents('.owl-item.active')
    .toggleClass('hover');
  });
  $('.brand__in').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      smartSpeed: 800,
      margin: 30,
      navText: ["<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 2
        },
        600 : {
            items: 3
        },
        900 : {
            items: 4
        },
        1200 : {
            items: 6
        }
      }
  });
  $('.news__in').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      smartSpeed: 800,
      margin: 30,
      navText: ["<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        600 : {
            items: 1
        },
        900 : {
            items: 2
        },
        1200 : {
            items: 3
        }
      }
  });
  // tabs 
  // if ( $(window).width() > 600 ) {
  //   $(document).ready(function () {
  //     $(".tabs__content-item:not(:first-child)").hide();
  //     $(".tabs__container div.tabs__content-item.active-tab").show();
  //     $('ul.tabs__list > li').click(function () {
  //       if (!($(this).hasClass('active'))) {
  //         var thisLi = $(this);
  //         var numLi = thisLi.index();
  //         thisLi.addClass('active').siblings().removeClass('active');
  //         thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
  //       }
  //     });
  //   });
  // };
  // if ( $(window).width() < 600 ) {
  //   $('.tabs-acc__btn').on('click', function(){
  //     $(this).toggleClass('active').siblings('.tabs-acc__cnt').slideToggle();
  //   })
  // };
  $('.fancybox-close__btn').on('click', function(){
    $.fancybox.close();
  });
});