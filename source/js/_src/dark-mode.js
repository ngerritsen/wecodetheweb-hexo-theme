module.exports = function darkMode ($) {
  var body = $('body')
  var darkSwitch = $('#dark-mode-switch')

  initialize()

  function initialize () {
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
