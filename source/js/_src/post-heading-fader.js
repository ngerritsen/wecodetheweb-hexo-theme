module.exports = function postHeadingFader ($) {
  var body = $('body')
  var minimumOverlay = 0.2
  var start = 50
  var end = 340
  var range = end - start

  $(window).scroll(fadeHeading)
  setInterval(fadeHeading, 100)
  fadeHeading()

  function fadeHeading () {
    var distance = body.scrollTop()
    var difference = distance - start
    difference = difference < 0 ? 0 : difference

    var opacity = minimumOverlay + ( 1 - minimumOverlay ) * ( difference / range )

    if (typeof distance === 'number') {
      $('.post--heading-overlay').css({
        'opacity': opacity > 1 ? 1 : opacity
      })
    }
  }
}
