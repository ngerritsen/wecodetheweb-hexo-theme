module.exports = function headerHider ($) {
  var body = $('body')
  var header = $('.header')
  var headerHeight = header.height()
  var previousDistance = body.scrollTop()

  $(window).scroll(hideHeader)

  function hideHeader() {
    var distance = body.scrollTop()

    if (distance > headerHeight + 20 && distance > previousDistance) {
      header.addClass('is-hidden')
    } else if (distance < previousDistance - 40 || distance < headerHeight + 20) {
      header.removeClass('is-hidden')
    }

    previousDistance = distance
  }
}
