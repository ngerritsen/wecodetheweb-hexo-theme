module.exports = function textSizeSwitcher ($) {
  var body = $('body')
  var smallBtn  = $(
    '<button name="Small text" class="tools--font-small">' +
      '<i class="fa fa-font"></i>' +
    '</button>'
  )
  var mediumBtn = $(
    '<button name="Medium text" class="tools--font-medium is-active">' +
      '<i class="fa fa-font"></i>' +
    '</button>'
  )
  var largeBtn = $(
    '<button name="Large text" class="tools--font-large">' +
      '<i class="fa fa-font"></i>' +
    '</button>'
  )
  var readingTools = $(
    '<div class="tools--tool">' +
    '</div>'
  )
  var tools = $('.tools')
  var toolsContent = tools.find('.tools--content')

  initialize()

  function initialize () {
    readingTools.append(smallBtn)
    readingTools.append(mediumBtn)
    readingTools.append(largeBtn)

    toolsContent.append(readingTools)

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
