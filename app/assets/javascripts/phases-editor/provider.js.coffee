doc = null
dirty = true

createDocument = () ->
  try
    doc = document.implementation.createHTMLDocument 'Blank'
    # doc.documentElement.innerHTML = ''
  catch error
    # Fall back to iframe method.
    iframe = document.createElement 'iframe'
    document.body.appendChild iframe
    doc = iframe.contentDocument
    document.body.removeChild iframe
  
  phases.provider.document = doc
  doc

writeDocument = (code) ->
  try
    doc.documentElement.innerHTML = code
  catch error
    doc.body.innerHTML = code
  
  doc

reloadCode = (async=false) ->
  result = false
  jQuery.ajax
    async: async
    url: phases.config.location + '/code'
    dataType: 'text'
    success: (code) ->
      createDocument()
      writeDocument(code)
      
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
    writeDocument(code)
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
    
