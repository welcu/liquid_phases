doc = null
dirty = true

createDocument = (code) ->
  try
    d = document.implementation.createHTMLDocument 'Blank'
  catch error
    # Fall back to iframe method.
    iframe = document.createElement 'iframe'
    document.body.appendChild iframe
    d = iframe.contentDocument
    document.body.removeChild iframe
  
  # console.log doc
  #  unless doc
  
  # I prefer this way but firefox doesn't like the doc.write approach
  # doc.open()
  # doc.write code
  d.documentElement.innerHTML = code
  d

reloadCode = (async=false) ->
  result = false
  jQuery.ajax
    async: async
    url: phases.config.location + '/code'
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
    code = '<!DOCTYPE html>\n<html>\n' + doc.documentElement.innerHTML + '\n</html>'
    code = code.replace /%7B%7B(%20)*/ig, '{{ '
    code = code.replace /(%20)*%7D%7D/ig, ' }}'
    code
    
  setCode: (code) ->
    # TODO: Sanitize!
    
    #doc.open 'text/html','replace'
    #doc.write(code)
    doc.documentElement.innerHTML = code
    phases.provider.setDirty()
  isDirty: ->
    dirty
  setDirty: ->
    dirty = true
    $('#saveButton').removeClass('disabled')
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
      url: phases.config.location
      type: 'POST'
      data: data
      success: () ->
        result = true
        dirty = false
        if result
          $('#saveButton').addClass('disabled')
    result
    
