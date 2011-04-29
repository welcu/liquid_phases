this.phases ||= {}
this.phases.modes ||= {}

this.phases.modes.design =
  init: ->
    iframe = document.createElement 'iframe'
    iframe.src = 'about:blank'
    $('#canvas').html iframe
    iframe.contentDocument.write phases.provider.getCode()
    designer = document.createElement('script')
    designer.type = 'text/javascript'
    designer.src = '/javascripts/designer.js'
    iframe.contentDocument.getElementsByTagName('head')[0].appendChild(designer)
    true