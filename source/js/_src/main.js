var textSizeSwitcher = require('./text-size-switcher')
var postHeadingFader = require('./post-heading-fader')
var headerHider = require('./header-hider')
var backToTop = require('./back-to-top')
var darkMode = require('./dark-mode')
var setCopyrightYear = require('./set-copyright-year')
var readingTools = require('./reading-tools')

function main () {
  textSizeSwitcher(jQuery)
  postHeadingFader(jQuery)
  headerHider(jQuery)
  backToTop(jQuery)
  darkMode(jQuery)
  setCopyrightYear(jQuery)
  readingTools(jQuery)
}

jQuery().ready(main)
