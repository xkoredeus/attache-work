$(() => {
  //sticky header
  if ( $(window).width() > 1200 ) {
    $(window)
      .scroll(function windowScroll() {
        if ($(this).scrollTop() > 4) {
          $('body').addClass('sticky');
          $('.header__col:nth-child(2)')
            .removeClass('col-xl-2')
            .addClass('col-xl-6');
          $('.header__col:nth-child(3)')
            .removeClass('col-xl-5')
            .addClass('col-xl-6');
        }
        else {
          $('body').removeClass('sticky');
          $('.header__col:nth-child(2)')
            .removeClass('col-xl-6')
            .addClass('col-xl-2');
          $('.header__col:nth-child(3)')
            .removeClass('col-xl-6')
            .addClass('col-xl-5');
        }
    });
  } else {
    $(window)
      .scroll( function windowScroll() {
        $('.header__hamb').removeClass('active');
        $('.main-nav').slideUp(0);

        if ($(this).scrollTop() > 260) {
          $('body').addClass('sticky');
        }
        else {
          $('body').removeClass('sticky');
        }
      });
  }
});

$(() => {
  $('.nav-cat')
    .hover(function navCatHover() {
    $(this)
      .toggleClass('active')
      .find('.nav-cat__list')
      .slideToggle(0);
  });
});

$(() => {
  $('.header-cat')
    .hover(function headerCatHover() {
    $(this)
      .toggleClass('active')
      .find('.header-cat__list')
      .slideToggle(0);
  });
});

$(() => {
  $('.header__search-opt')
    .on('click', function headerOptClick(){
    $(this).next('.header__search-pop')
    .slideToggle(0);
  });
  $(document).on('click', (e) => {
    const searchContainer = $('.header__search');
    // if the target of the click isn't the container nor a descendant of the container
    if (!searchContainer.is(e.target) && searchContainer.has(e.target).length === 0) {
      searchContainer.removeClass('active');
      $('.header__search-pop').slideUp();
    }
  });
})

$(() => {
  $('.banner').owlCarousel({
      nav: false,
      items: 1,
      loop: false,
      dots: true,
      smartSpeed: 800,
  });
});

$(() => {
  $('.hit__in').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    mouseDrag: false,
    margin: 15,
    navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
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
    }
  }).on({"translated.owl.carousel": setHitCls, "translate.owl.carousel": remHitCls});

  function setHitCls() {
    $(".owl-item").filter(".active").eq(4).addClass("more-left")
  }
  function remHitCls() {
    $(".owl-item").removeClass("more-left")
  }
  setHitCls();
});

$(() => {
  $('.view__in').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    startPosition: 0,

    margin: 15,
    navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
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
});

$(() => {
  $('.brand__in').owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    smartSpeed: 800,
    margin: 30,
    navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
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
});

$(() => {
  $('.news__in').owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    smartSpeed: 800,
    margin: 30,
    navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
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
});

$(() => {
  $('.cert__in').owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    smartSpeed: 800,
    margin: 30,
    navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
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
});

$(() => {
  $('.port__in').owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    smartSpeed: 800,
    startPosition: 0,
    margin: 15,
    navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
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
});

$(() => {
  $('.excl__slider').owlCarousel({
    nav: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    smartSpeed: 800,
  });
});

$(() => {
  $('.excl-bot__slider').owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    smartSpeed: 800,
    margin: 30,
    navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
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
});

$(() => {
  // card slider
  const sync1 = $('.card__slider-top');
  const sync2 = $('.card__slider-bot');

  const thumbnailItemClass = '.owl-item';

  function syncPosition(el) {
    const $owlSlider = $(this).data('owl.carousel');
    const { loop } = $owlSlider.options;

    let current = el.item.index;
    if (loop) {
      const count = el.item.count - 1;
      current = Math.round(el.item.index - (el.item.count / 2) - 0.5);
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
    }

    const owlThumbnail = sync2.data('owl.carousel');
    const itemClass = `.${owlThumbnail.options.itemClass}`;

    const thumbnailCurrentItem = sync2
      .find(itemClass)
      .removeClass('synced')
      .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      const duration = 300;
      sync2.trigger('to.owl.carousel', [current, duration, true]);
    }
  }

  sync1.owlCarousel({
    startPosition: 0,
    items: 1,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 700,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
  }).on('changed.owl.carousel', syncPosition);


  sync2.owlCarousel({
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
    onInitialized(e) {
      // eslint-disable-next-line no-underscore-dangle
      const thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  }).on('click', thumbnailItemClass, (e) => {
    e.preventDefault();
    const duration = 300;
    const itemIndex = $(e.target).parents(thumbnailItemClass).index();
    sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
  }).on('changed.owl.carousel', (el) => {
    const number = el.item.index;
    const $owlSlider = sync1.data('owl.carousel');
    $owlSlider.to(number, 100, true);
  });
})

$(() => {
  $('.hit__item-wrp').mouseenter(function hitItemMouseEnter() {
    $(this)
      .find('.hit__item-more')
      .slideDown(0)
      .find('.hit__item-colors').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span></button>"
      })
      .parents('.owl-item')
      .filter('.active')
      .addClass('hover');
  });
  $('.hit__item-wrp').mouseleave(function hitItemMouseLeave() {
    $(this)
      .find('.hit__item-more')
      .slideUp(0)
      .find('.hit__item-colors').slick('unslick')
      .parents('.owl-item')
      .filter('.active')
      .removeClass('hover')
  });
});

$(() => {
  $('.cat__item-wrp').mouseenter(function catItemMouseEnter() {
    $(this)
      .find('.cat__item-more')
      .slideDown(0)
      .find('.cat__item-colors').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span></button>"
      });
  });
  $('.cat__item-wrp').mouseleave(function catItemMouseLeave() {
    $(this)
      .find('.cat__item-more')
      .slideUp(0)
      .find('.cat__item-colors').slick('unslick');
  });
});


$(() => {
  // input type number
  $('.quantity').on('click', '.quantity-minus, .quantity-plus', function quantityClick(e) {
    e.preventDefault();
    const input = $( this ).siblings( '.quantity-num' );
    if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
        input.val( +input.val() - 1 );
    } else if ( $( this ).hasClass( 'quantity-plus' ) ) {
      input.val( +input.val() + 1 );
    };
  });
});

$(() => {
  $('.footer__top-ttl').on('click', function footerTitleClick() {
    $(this)
    .toggleClass('active')
    .next('.footer__top-list')
    .slideToggle();
  });
});

$(() => {
  $('.cat-side__ttl').on('click', function catTitleClick(){
    $(this)
    .toggleClass('active')
    .next('.cat-side__list')
    .slideToggle();
  });
});

$(() => {
  // data tabs
  $('.tabs__content-item:not(:first-child)').hide();
  $('ul.tabs__list > li').on('click', function tabsLiClick() {
    if (!($(this).hasClass('active'))) {
      $(this)
       .addClass('active')
        .siblings()
        .removeClass('active');
      $('.tabs__content-item')
        .hide()
      $('.tabs__content-item[data-item="' + $(this)
        .attr('data-item') + '"]')
        .fadeIn('slow');
    }
  });
});

$(() => {
  $('.fancybox-close__btn').
    on('click', function fancyboxCloseClick(){
    $.fancybox.close();
  });
});

$(() => {
  // Стилизованный input type file
  $('.upload__file').change(function uploadChange() {
    let filename = [];
    for (let i = 0; i < $(this)
      .get(0).files.length; ++i) {
      filename
        .push($(this)
        .get(0).files[i]
        .name
        .slice(0, 18) + '...');
    }
    $(this)
      .next('.filename')
      .text(filename.join(', '));
    $(this)
      .parent()
      .next('.upload__file-status')
      .css('display','none');
  });
});

$(() => {
  if ( $(window).width() > 1200 ) {
   $('.selectmenu').selectmenu({
    width: 90
   });
  } else {
    $('.selectmenu').selectmenu({});
  }
});

$(() => {
  $('.show-filter').on('click', function showFilterClick() {
    if (!($(this).hasClass('active'))) {
      $(this)
        .addClass('active')
        .find('span')
        .text('Скрыть фильтр')
      $('.cat-tabs')
        .slideDown();
      $('.cat-filter')
        .slideDown();
    } else {
      $(this)
        .removeClass('active')
        .find('span')
        .text('Показать фильтр')
      $('.cat-tabs')
        .slideUp();
      $('.cat-filter')
        .slideUp();
    }
  })
});

$(() => {
  $('.header__hamb').on('click', function hambClick() {
    $(this).toggleClass('active');
    $('.main-nav').slideToggle();
  });
});

$(() => {
  $('.show-mob-cat').on('click', function mobCatBtnClick() {
    $(this).toggleClass('active');
    $('.mob-cat__wrp').slideToggle();
  })
});

$(() => {
  $('.mob-cat__ttl').on('click', function mobCatTitleClick(){
    $(this)
      .toggleClass('active')
      .next('.mob-cat__list')
      .slideToggle();
  });
});

$(() => {
  $('.js-show-comm').on('click', function cartCommBtnClick(){
    $(this)
      .toggleClass('active')
      .next('.cart__item-comm')
      .slideToggle();
  })
});

$(() => {
  if ( $(window).width() < 1199 ) {
    // category slider
    $('.main-cat__list').removeClass('row');
    $('.main-cat__item-col').removeClass('col-xl-2 mb-2');

    $('.main-cat__item-wrp').removeClass('col-xl-2 col-sm-4 col-6 mb-3');
    $('.main-cat__item-col .main-cat__item-wrp:nth-child(1)').addClass('mb-2');

    $('.main-cat__list').addClass('owl-carousel');
    $('.main-cat__list').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      smartSpeed: 800,
      margin: 30,
      navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
      responsive : {
        0   : {
            items: 1
        },
        320 : {
            items: 2
        },
        600 : {
            items: 3
        },
        900 : {
            items: 4
        },
      }
    });

    $('.about-test__list')
      .removeClass('row')
      .addClass('owl-carousel');
    $('.about-test__item-wrp')
      .removeClass('col-xl-4');
    $('.about-test__list').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      smartSpeed: 800,
      margin: 30,
      navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
      responsive : {
        0   : {
            items: 1
        },
        600 : {
            items: 2
        },
        900 : {
            items: 3,
        },
      }
    });

    $('.team__list')
      .removeClass('row')
      .addClass('owl-carousel');
    $('.team__item-wrp')
      .removeClass('col-xl-4 mb-3 mb-xl-4');
    $('.team__list').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      smartSpeed: 800,
      margin: 30,
      navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
      responsive : {
        0   : {
            items: 1
        },
        600 : {
            items: 2
        },
        900 : {
            items: 3,
        },
      }
    });

    $('.manager__list')
      .removeClass('row')
      .addClass('owl-carousel');
    $('.manager__item-wrp')
      .removeClass('col-xl-3 mb-3 mb-xl-4');
    $('.manager__list').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      smartSpeed: 800,
      margin: 30,
      navText: ["<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg></span>","<span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></span>"],
      responsive : {
        0   : {
            items: 1
        },
        600 : {
            items: 2
        },
        900 : {
            items: 3,
        },
      }
    });
    
  }
});