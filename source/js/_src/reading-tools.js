module.exports = function readingTools ($) {
  var body = $('body')
  var header = $('.header')
  var readingTools = $('.tools')
  var headerHight = header.height()
  var startReading = 550

  $(window).scroll(handleReadingTools)

  function handleReadingTools() {
    var distance = body.scrollTop()
    var headerIsHidden = header.hasClass('is-hidden')

    if (distance > startReading) {
      readingTools.addClass('is-sticky')
    } else {
      readingTools.removeClass('is-sticky')
    }

    if (!headerIsHidden) {
      readingTools.addClass('alt-with-header')
    } else {
      readingTools.removeClass('alt-with-header')
    }
  }
}
