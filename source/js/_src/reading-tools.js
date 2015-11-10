module.exports = function readingTools ($) {
  var body = $('body')
  var header = $('.header')
  var tools = $('.tools')
  var headerHight = header.height()
  var startReading = 550

  initialize()

  function initialize () {
    $(window).scroll(handleReadingTools)
  }

  function handleReadingTools() {
    var distance = body.scrollTop()
    var headerIsHidden = header.hasClass('is-hidden')

    if (distance > startReading) {
      tools.addClass('is-sticky')
    } else {
      tools.removeClass('is-sticky')
    }

    if (!headerIsHidden) {
      tools.addClass('alt-with-header')
    } else {
      tools.removeClass('alt-with-header')
    }
  }
}
