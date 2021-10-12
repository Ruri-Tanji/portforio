$(function() {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open';
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
});

$(function(){
  var topBtn=$('#pagetop');
  topBtn.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    } 
  });
 
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});

$(document).ready(function(){
  $('.slider').bxSlider({
      auto: true,
      pause: 5000,
  });
});

$(function() {
  var hideList = '.grid .item:nth-of-type(n+7)';
  $(hideList).hide();
  $('.btn_ao_b').click(function() {
    $(hideList).toggle();
    if ($(hideList).css('display') == 'none') {
      document.getElementById("te").innerHTML = "view more";
    } else {
      document.getElementById("te").innerHTML = "close";
    }
    return false;
  });

  var num = $('.grid').children('.item').length;
  if (num < 7) {
    $('.btn_ao_b').hide();
  };
});

$(function() {
  var hideList = '.grid1 .content:nth-of-type(n+7)';
  $(hideList).hide();
  $('.btn_ao_b').click(function() {
    $(hideList).toggle();
    if ($(hideList).css('display') == 'none') {
      document.getElementById("te1").innerHTML = "view more";
    } else {
      document.getElementById("te1").innerHTML = "close";
    }
    return false;
  });

  var num = $('.grid1').children('.content').length;
  if (num < 7) {
    $('.btn_ao_b').hide();
  };
});