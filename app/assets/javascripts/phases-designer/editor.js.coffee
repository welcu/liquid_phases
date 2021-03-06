provider = this.parent.phases.provider

editTextObject = (event) ->
  id = this.id
  editor = $('<textarea></textarea>')
  editor.val $(this).html()
  $('#phasesDialog').html editor
  editor.ckeditor
    toolbar: 'Phases'
    resize_enabled: true
    # extraPlugins: 'autogrow'
    startupFocus: true
    toolbarCanCollapse: false

    filebrowserUploadUrl: phases.config.location+'/upload'
  
  confirmButton = $('<a href="#confirm" class="phasesConfirmButton aButton aGreen">Confirm</a>')
  confirmButton.click ->
    $( '#'+id, document ).html editor.val()
    $( '#'+id, provider.getDocument() ).html editor.val()
    provider.setDirty()
    $('body').removeClass 'overlaid'
    false
  confirmButton.appendTo '#phasesDialog'

  closeButton = $('<a href="#close" class="phasesCloseButton aButton aGray">Cancel</a>')
  closeButton.click ->
    $('body').removeClass 'overlaid'
    editor.ckeditorGet().destroy()
    false
  closeButton.appendTo '#phasesDialog'

  
  $('body').addClass 'overlaid'

  event.stopPropagation()

  $('#phasesDialog').css
    position: 'absolute'
    top: '50px'

  false
  
editImageObject = (event) ->
  object = this
  $('#phasesDialog').html ''
  form = $ '''
    <form method="post" enctype="multipart/form-data" target="phasesUploaderTarget">
      <input type="file" name="upload">
      <input type="submit" value="Replace">
    </form>
  '''
  form.attr 'action', phases.config.location + '/upload'

  target = $ '<iframe style="display: none;" id="phasesUploaderTarget" name="phasesUploaderTarget"></iframe>'
  
  form.submit ->
    target.bind 'load', ->
      url = this.contentWindow.document.body.innerHTML
      $( '#'+object.id, document ).attr 'src', url
      $( '#'+object.id, provider.getDocument() ).attr 'src', url
      provider.setDirty()
      $('body').removeClass 'overlaid'

  closeButton = $('<a href="#close" class="phasesCloseButton aButton aGray">Cancel</a>')
  closeButton.click ->
    $('body').removeClass 'overlaid'
    false

  form.appendTo '#phasesDialog'
  target.appendTo '#phasesDialog'
  closeButton.appendTo '#phasesDialog'
  $('body').addClass 'overlaid'

  max_top = ->
    elem_top = $(event.srcElement).offset().top - $('#phasesDialog').height() - 50
    min_top = 50
    if elem_top > min_top
      elem_top
    else
      min_top
  
  $('#phasesDialog').css
    position: 'absolute'
    top: max_top()
  
  event.stopPropagation()
  false

editStringObject = (event) ->
  object = this
  $('#phasesDialog').html ''
  form = $ '''
    <form>
      <input type="text" id="phasesStringReplacement" size="100">
      <input type="submit" value="Replace">
    </form>
  '''
  
  $('#phasesStringReplacement', form).val object.innerHTML
  
  form.submit ->
    new_value = $('#phasesStringReplacement').val()
    $( '#'+object.id, document ).html new_value
    $( '#'+object.id, provider.getDocument() ).html new_value
    provider.setDirty()
    $('body').removeClass 'overlaid'
    false

  closeButton = $('<a href="#close" class="phasesCloseButton aButton aGray">Cancel</a>')
  closeButton.click ->
    $('body').removeClass 'overlaid'
    false

  form.appendTo '#phasesDialog'
  closeButton.appendTo '#phasesDialog'
  $('body').addClass 'overlaid'

  max_top = ->
    elem_top = $(event.srcElement).offset().top - $('#phasesDialog').height() - 50
    min_top = 50
    if elem_top > min_top
      elem_top
    else
      min_top
  
  $('#phasesDialog').css
    position: 'absolute'
    top: max_top()
  
  event.stopPropagation()
  false


editRemovableObject = (event) ->
  if confirm 'Are you sure?'
    $( '#'+this.id, document ).detach()
    $( '#'+this.id, provider.getDocument() ).detach()
    provider.setDirty()
  event.stopPropagation()
  false

setupEditor = (object) ->
  mode = object.attr( phases.config.editor_tag )  
  switch mode
    when 'text'
      object.click editTextObject
    when 'image'
      object.click editImageObject
    when 'string'
      object.click editStringObject
    when 'remove'
      object.click editRemovableObject


jQuery ->
  $("[#{phases.config.editor_tag}]").each ->
    setupEditor $(this)
