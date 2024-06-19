$(".menu-btn").click(function () {
  $(this).toggleClass('active');
});


$(function() {
  $('.main-visual').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    infinaite: true,
  });
});
