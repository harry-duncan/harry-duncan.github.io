// Smooth scrolling

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

// nav
$(document).ready(function(){
  $('.bars').click(function(){
    $('#nav').toggleClass('open');
    $('.container').toggleClass('menu-open');
  });
});

console.log("If you would like to hire me please email me - harryduncan25@gmail.com");