module.exports = function textSizeSwitcher ($) {
  var body = $('body')
  var smallBtn  = $('.tools--font-small')
  var mediumBtn = $('.tools--font-medium')
  var largeBtn = $('.tools--font-large')

  initTextSize()

  function initTextSize () {
    smallBtn.click(function () {
      applyTextSize('small')
    })
    mediumBtn.click(function () {
      applyTextSize('medium')
    })
    largeBtn.click(function () {
      applyTextSize('large')
    })

    if (Storage) {
      const size = localStorage.getItem('textSize')

      if (size && size !== 'null') {
        applyTextSize(size)
      }
    }
  }
//
  function applyTextSize (size) {
    storeTextSize(size)
    resetTextSize()

    switch (size) {
      case 'small':
        smallBtn.addClass('is-active')
        body.addClass('alt-small')
        break
      case 'medium':
        mediumBtn.addClass('is-active')
        break
      case 'large':
        largeBtn.addClass('is-active')
        body.addClass('alt-large')
        break
    }
  }

  function storeTextSize (size) {
    if (Storage) {
      localStorage.setItem('textSize', size)
    }
  }

  function resetTextSize () {
    smallBtn.removeClass('is-active')
    mediumBtn.removeClass('is-active')
    largeBtn.removeClass('is-active')

    body.removeClass('alt-small')
    body.removeClass('alt-large')
  }
}
