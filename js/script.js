//ファーストビューのslider
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: true,
  cssEase: 'linear'
});


//ハンバーガーメニューの開閉
$('.burger-btn').on('click',function(){
  $('.header-nav').fadeToggle(300);
  $('.burger-btn').toggleClass('cross');
  $('body').toggleClass('noscroll');
});

// スムーズスクロール
$('a[href^="#"]').on('click', function(){
  var adjust = 0;
  var speed = 400;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top + adjust;
  if (typeof $(this).attr("id") === "undefined") {
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  }
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

