doc = null
dirty = true

createDocument = (code) ->
  iframe = window.document.createElement 'iframe'
  console.log iframe
  iframe.src = 'about:blank'
  iframe.style.display = 'none'
  $('body').append iframe
  iframe.contentDocument.write code
  iframe.contentDocument

reloadCode = (async=false) ->
  result = false
  jQuery.ajax
    async: async
    url: '/phases/editor/code'
    dataType: 'text'
    success: (code) ->
      doc = createDocument(code)
      result = true
      dirty = false
  result

this.phases ||= {}
this.phases.provider =
  init: ->
    reloadCode()  
  getDocument: ->
    doc
  getCode: ->
    '<!DOCTYPE html>\n<html>\n' + $('html', doc).html() + '\n</html>\n'
  setCode: (code) ->
    doc.open 'text/html','replace'
    
    # TODO: Sanitize!
    
    doc.write(code)
    dirty = true
  isDirty: ->
    dirty
  save: (async=false) ->
    # return false unless dirty
    
    csrf_token = $('meta[name=csrf-token]').attr('content')
    csrf_param = $('meta[name=csrf-param]').attr('content')
    
    data = 
      _method: 'PUT'
      code: phases.provider.getCode()
    data[csrf_param] = csrf_token
    
    result = false
    jQuery.ajax
      async: async
      url: '/phases/editor'
      type: 'POST'
      data: data
      success: () ->
        result = true
        dirty = false
    result
    
