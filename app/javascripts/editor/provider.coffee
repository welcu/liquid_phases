doc = null
dirty = true

createDocument = (code) ->
  doc = document.implementation.createHTMLDocument 'Blank'
  doc.open()
  doc.write code
  doc

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
    '<!DOCTYPE html>\n' + doc.documentElement.outerHTML
  setCode: (code) ->
    doc.open 'text/html','replace'
    
    # TODO: Sanitize!
    
    doc.write(code)
    phases.provider.setDirty()
  isDirty: ->
    dirty
  setDirty: ->
    dirty = true
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
    
