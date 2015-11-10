module.exports = function darkMode ($) {
  var body = $('body')
  var headerContainer = $('.header').find('.container')
  var headerTools = $('<div class="header--tools">Dark </div>')
  var darkSwitch = $('<i class="fa fa-toggle-off dark-mode-switch" id="dark-mode-switch"></i>')

  initialize()

  function initialize () {
    headerTools.append(darkSwitch)
    headerContainer.prepend(headerTools)

    var isDark = getDarkMode()

    if (isDark === 'true' || isDark === true) {
      handleSwitchMode()
    }

    darkSwitch.click(handleSwitchMode)
  }

  function handleSwitchMode () {
    var isDark = body.hasClass('dark')

    if (!isDark) {
      body.addClass('dark')
      darkSwitch.addClass('fa-toggle-on')
      darkSwitch.removeClass('fa-toggle-off')
      storeDarkMode(true)
      return
    }

    body.removeClass('dark')
    darkSwitch.addClass('fa-toggle-off')
    darkSwitch.removeClass('fa-toggle-on')
    storeDarkMode(false)
  }

  function storeDarkMode (isDark) {
    if (Storage) {
      localStorage.setItem('dark', isDark)
    }
  }

  function getDarkMode (isDark) {
    if (Storage) {
      return localStorage.getItem('dark')
    }
  }
}
