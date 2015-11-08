$().ready(function () {
  var body = $('body');
  var header = $('header');

  // Dark switcher
  $('#js-dark-switch').click(function () {
    body.toggleClass('dark');
  });

  // Text size switcher
  var smallBtn  = $('.tools--font-small');
  var mediumBtn = $('.tools--font-medium');
  var largeBtn = $('.tools--font-large');

  initTextSize();

  function initTextSize () {
    smallBtn.click(function () {
      applyTextSize('small');
    });
    mediumBtn.click(function () {
      applyTextSize('medium');
    });
    largeBtn.click(function () {
      applyTextSize('large');
    });

    if (Storage) {
      var size = localStorage.getItem('textSize');

      if (size && size !== 'null') {
        applyTextSize(size);
      }
    }
  }

  function applyTextSize (size) {
    storeTextSize(size);
    resetTextSize();

    switch (size) {
      case 'small':
        smallBtn.addClass('is-active');
        body.addClass('alt-small');
        break;
      case 'medium':
        mediumBtn.addClass('is-active');
        break;
      case 'large':
        largeBtn.addClass('is-active');
        body.addClass('alt-large');
        break;
    }
  }

  function storeTextSize (size) {
    if (Storage) {
      localStorage.setItem('textSize', size);
    }
  }

  function resetTextSize () {
    smallBtn.removeClass('is-active');
    mediumBtn.removeClass('is-active');
    largeBtn.removeClass('is-active');

    body.removeClass('alt-small');
    body.removeClass('alt-large');
  }

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
