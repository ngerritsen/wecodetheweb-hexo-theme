module.exports = function headerHider ($) {
  var body = $('body')
  var header = $('.header')
  var headerHight = 70
  var previousDistance = body.scrollTop()

  $(window).scroll(hideHeader)

  function hideHeader() {
    var distance = body.scrollTop()

    if (distance > headerHight + 10 && distance > previousDistance) {
      header.addClass('is-hidden')
    } else {
      header.removeClass('is-hidden')
    }

    previousDistance = distance
  }
}
