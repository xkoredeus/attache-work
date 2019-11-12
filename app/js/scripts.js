$(function() {
  $('.banner_top').owlCarousel({
      nav: false,
      items: 1,
      loop: false,
      dots: true,
      smartSpeed: 800,
  });
  // tabs 
  if ( $(window).width() > 600 ) {
    $(document).ready(function () {
      $(".tabs__content-item:not(:first-child)").hide();
      $(".tabs__container div.tabs__content-item.active-tab").show();
      $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
          var thisLi = $(this);
          var numLi = thisLi.index();
          thisLi.addClass('active').siblings().removeClass('active');
          thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
        }
      });
    });
  };
  if ( $(window).width() < 600 ) {
    $('.tabs-acc__btn').on('click', function(){
      $(this).toggleClass('active').siblings('.tabs-acc__cnt').slideToggle();
    })
  };
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
});