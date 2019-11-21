$(function() {
  //sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 4) {
      $('body').addClass('sticky');
      $('.header__col:nth-child(2)').removeClass('col-xl-2').addClass('col-xl-6');
      $('.header__col:nth-child(3)').removeClass('col-xl-5').addClass('col-xl-6');
    }
    else {
      $('body').removeClass('sticky');
      $('.header__col:nth-child(2)').removeClass('col-xl-6').addClass('col-xl-2');
      $('.header__col:nth-child(3)').removeClass('col-xl-6').addClass('col-xl-5');
    }
  });
  $('.nav-cat').hover(function() {
    $(this)
      .toggleClass('active')
      .find('.nav-cat__list')
      .slideToggle(0);
  });
  $('.header-cat').hover(function() {
    $(this)
      .toggleClass('active')
      .find('.header-cat__list')
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
      smartSpeed: 800,
      startPosition: 0,

      margin: 15,
      navText: ["<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
      responsive : {
        0   : {
            items: 1,
            dots: false,
        },
        380 : {
            items: 1,
            dots: false,
        },
        480 : {
            items: 1,
            dots: false,
        },
        600 : {
            items: 2,
            dots: false,
        },
        900 : {
            items: 3,
            dots: false,
        },
        1200 : {
            items: 4,
            dots: true,
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


  $('.view__in').owlCarousel({
      nav: true,
      loop: false,
      smartSpeed: 800,
      startPosition: 0,

      margin: 15,
      navText: ["<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
      responsive : {
        0   : {
            items: 1,
            dots: false,
        },
        380 : {
            items: 1,
            dots: false,
        },
        480 : {
            items: 1,
            dots: false,
        },
        600 : {
            items: 2,
            dots: false,
        },
        900 : {
            items: 3,
            dots: false,
        },
        1200 : {
            items: 4,
            dots: true,
        }
      },
  });
  $('.cat__item-colors').owlCarousel({
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
  $('.cat__item-wrp').hover(function() {
    $(this)
    .find('.cat__item-more')
    .slideToggle(0)
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
  $('.cert__in').owlCarousel({
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
  $('.port__in').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
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
  });
  $('.footer__top-ttl').on('click', function() {
    $(this)
    .toggleClass('active')
    .next('.footer__top-list')
    .slideToggle();
  })
  $('.cat-side__ttl').on('click', function(){
    $(this)
    .toggleClass('active')
    .next('.cat-side__list')
    .slideToggle();
  });
  // tabs 
  $(document).ready(function () {
    $(".tabs__content-item:not(:first-child)").hide();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  //tabs
  $('ul.tabs__list > li').on('click', function() {
    if (!($(this).hasClass('active'))) {
      $(this)
       .addClass('active')
        .siblings()
        .removeClass('active');
      $('.tabs__content-item')
        .hide()
      $('.tabs__content-item[data-item="' + $(this).attr('data-item') + '"]')
        .fadeIn('slow');
    }
  });
  $('.fancybox-close__btn').on('click', function(){
    $.fancybox.close();
  });
  //card slider
  var sync1 = $('.card__slider-top');
  var sync2 = $('.card__slider-bot');

  var thumbnailItemClass = '.owl-item';

  var slides = sync1.owlCarousel({
    startPosition: 0,
    items:1,
    loop:false,
    margin:10,
    nav: false,
    navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
    dots: false,
    smartSpeed: 700,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if(loop){
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      if(current < 0) {
          current = count;
      }
      if(current > count) {
          current = 0;
      }
    }else{
      var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel',[current, duration, true]);
    }   
  }
  var thumbs = sync2.owlCarousel({
    startPosition: 0,
    items: 4,
    loop:false,
    margin: 15,
    autoplay:false,
    nav: false,
    dots: false,
    responsive : {
      0   : {
          items: 3
      },
      600 : {
          items: 4
      }
    },
    onInitialized: function (e) {
      var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  })
  .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });
  //input type number
  $( '.quantity' ).on( 'click', '.quantity-minus, .quantity-plus', function (e) {
    e.preventDefault();
  var input = $( this ).siblings( '.quantity-num' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'quantity-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });
  // if ( $(window).width() > 1200 ) {
  //  $('.selectmenu').selectmenu();
  // }
});