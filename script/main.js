if (window.location.host.substr(-10) == '.github.io' && window.location.protocol != 'https:') {
    window.location.protocol = 'https:';
}

$(document).ready(function () {
  $('.menu-container').click(function () {
    $('.nav-container')
      .addClass('show')
      .addClass('animate');
    $('body').addClass('noscroll');
  });
  $('.nav-container').click(function (event) {
    if (event.target == $('.nav-container')[0]
      || event.target == $('nav .close')[0]) {
      $('.nav-container').removeClass('show')
      .addClass('animate');
    }
    $('body').removeClass('noscroll');
  });

  $('.nav-container').on('transitionend', function() {
    $(this).removeClass('animate');
  });
});

var data = {
  thing: 0,
  letter: 0,
  thingsYouCanLearn: [
    'build a robot',
    'program a robot',
    'program an Arduino',
    'make a line follower',
    'do anything.'
  ]
}

function type () {
  var $textBox = $('.what-to-lean');
  var currentScroll = $(document).scrollTop();
  var startLen = $textBox.height();
  $textBox.find('strong').text(data.thingsYouCanLearn[data.thing].slice(0,data.letter+1));
  var currentLen = $textBox.height();
  if (currentScroll > $('header').height()) {
    $(document).scrollTop(currentScroll+(currentLen-startLen));
  }
  data.letter++;
  if (data.letter == data.thingsYouCanLearn[data.thing].length) {
    if (data.thing == data.thingsYouCanLearn.length-1) {
      return;
    }
    data.thing++;
    data.letter = 0;
    setTimeout(type, 2000);
  }
  else {
    setTimeout(type, 50);
  }
}

$(document).ready(function () {
  var thingsYouCanLearn = [
    'build a robot',
    'make a website',
    'develop a game',
    'anything.'
  ];
  type();

  $('.what-to-lean')
});
