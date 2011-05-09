createDocument = ->
  try
    document.implementation.createHTMLDocument 'Test'
  catch error 
    iframe = document.createElement 'iframe'
    document.body.appendChild iframe
    d = iframe.contentDocument
    document.body.removeChild iframe
    d

this.phases ||= {}
this.phases.compatibility =
  check: ->
    d = createDocument()
    return false unless d
    return false unless d.documentElement
    true
    
  warn: ->
    alert 'Browser not compatible!'