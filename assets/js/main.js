$(document).ready(function () {
  /*----header----*/
  $('.btn-menu').click(function() {
      $('body').toggleClass('show-menu');
  });
  $('.nav-mobile__list li .link').click(function() {
      $('.btn-menu__mobile').removeClass('active');
  });
  $('.nav-mobile__list li .link').click(function() {
      $('body').removeClass('show-menu');
  });
  $('.show-sub').click(function(e) {
      e.preventDefault()
      $(this).toggleClass('active');
      $('.sub-menu').toggleClass('show');
  });
  /*----end header----*/

  /*----scrolltop----*/
  var back_to_top=$(".back__to--top"),offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),$(document).on("click",".back__to--top",function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});
  /*----end scrolltop----*/
  fixedFeature('.home-featured__item1');
  fixedFeature('.home-featured__item2');
  fixedFeature('.home-featured__item3');
  fixedFeature('.home-featured__item4');



});

function fixedFeature(className) {
  $(window).scroll(function () {
    var $offsetEl = $(className).offset().top;
    var $scrollTop = $(this).scrollTop();
    $(className).each(function() {
      var $elReadmore = $(this).find('.el__readmore').offset().top;
      if ($scrollTop >= $offsetEl && $scrollTop <= $elReadmore - 50) {
        $(this).find('.el__thumb').addClass('el__position--fixed');
      } else {
        $(this).find('.el__thumb').removeClass('el__position--fixed');
      }
    });
  });
}

var wow = new WOW(
{
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
}
);
wow.init();
