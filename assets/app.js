
$(document).ready(function(){
  $('body').hide().fadeIn(2000);

});

$(document).scroll(function(){
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 50){
    $('.toggler').fadeOut(50);
    $('.site-header').addClass('white-bar');
    $('.nadc-logo').addClass('logo-spacing');
  }
  else {
    $('.toggler').fadeIn(500);
    $('.site-header').removeClass('white-bar');
    $('.nadc-logo').removeClass('logo-spacing');
  }
});
