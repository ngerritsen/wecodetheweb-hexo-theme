var postHeadingFader = require('./post-heading-fader')
var headerHider = require('./header-hider')
var backToTop = require('./back-to-top')
var setCopyrightYear = require('./set-copyright-year')

function main () {
  postHeadingFader(jQuery)
  headerHider(jQuery)
  backToTop(jQuery)
  setCopyrightYear(jQuery)
}

jQuery().ready(main)
