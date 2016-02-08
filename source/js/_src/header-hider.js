module.exports = function headerHider ($) {
  var body = $('body')
  var header = $('.header')
  var headerHeight = header.height()
  var previousDistance = body.scrollTop()
  var tools = $('.tools')
  var startReading = 550

  $(window).scroll(debounce(function () {
    hideHeader()
    handleReadingTools()
  }, 50))

  function hideHeader() {
    var distance = body.scrollTop()

    if (distance > headerHeight + 20 && distance > previousDistance) {
      header.addClass('is-hidden')
    } else if (distance < previousDistance - 30 || distance < headerHeight + 20) {
      header.removeClass('is-hidden')
    }

    previousDistance = distance
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

  function debounce(func, wait, immediate) {
  	var timeout
  	return function () {
  		var context = this
      var args = arguments
  		var later = function () {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		}

      var callNow = immediate && !timeout
  		clearTimeout(timeout)
  		timeout = setTimeout(later, wait)
  		if (callNow) func.apply(context, args)
  	}
  }
}
