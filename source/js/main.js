$().ready(function () {
  var body = $('body');
  var header = $('header');

  // Dark switcher
  $('#js-dark-switch').click(function () {
    $('body').toggleClass('dark');
  });

  // Header hider
  var headerHight = 70;
  var previousDistance = body.scrollTop();

  $(window).scroll(hideHeader);

  function hideHeader() {
    var distance = body.scrollTop();

    if (distance > headerHight + 10 && distance > previousDistance) {
      header.addClass('is-hidden');
    } else {
      header.removeClass('is-hidden');
    }

    previousDistance = distance;
  }

  // Post heading fader
  var minimumOverlay = 0.2;
  var start = 40;
  var end = 220;
  var range = end - start;

  $(window).scroll(fadeHeading);
  setInterval(fadeHeading, 100);
  fadeHeading();

  function fadeHeading () {
    var distance = body.scrollTop();
    var difference = distance - start;
    difference = difference < 0 ? 0 : difference;

    var opacity = minimumOverlay + ( 1 - minimumOverlay ) * ( difference / range );

    if (typeof distance === 'number') {
      $('.post--heading-overlay').css({
        'opacity': opacity > 1 ? 1 : opacity
      });
    }
  }
});
