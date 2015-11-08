module.exports = function backToTop ($) {
  $('.header a').click(preventBubble)
  $('.header--tools').click(preventBubble)
  $('.header').click(scrollToTop)
  
  function preventBubble (event) {
    event.stopPropagation()
  }

  function scrollToTop () {
      $('html, body').animate({ scrollTop: 0 }, 'slow')
  }
}
