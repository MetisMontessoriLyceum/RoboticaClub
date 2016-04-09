$(document).ready(function () {
  $('.menu-container').click(function () {
    $('.nav-container').addClass('show');
    $('body').addClass('noscroll');
  });
  $('.nav-container').click(function (event) {
    if (event.target == $('.nav-container')[0]
      || event.target == $('nav .close')[0]) {
      $('.nav-container').removeClass('show')
    }
    $('body').removeClass('noscroll');
  });
})
