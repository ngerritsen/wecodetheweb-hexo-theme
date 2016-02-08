var textSizeSwitcher = require('./text-size-switcher')
var postHeadingFader = require('./post-heading-fader')
var headerHider = require('./header-hider')
var backToTop = require('./back-to-top')
var setCopyrightYear = require('./set-copyright-year')
var darkMode = require('./dark-mode')

function main () {
  textSizeSwitcher(jQuery)
  postHeadingFader(jQuery)
  headerHider(jQuery)
  backToTop(jQuery)
  setCopyrightYear(jQuery)
  darkMode(jQuery)
}

jQuery().ready(main)
