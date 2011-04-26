provider = this.parent.phases.provider

editTextObject = (event) ->
  id = this.id
  editor = $('<textarea></textarea>')
  editor.val $(this).html()
  $('#phasesDialog').html editor
  editor.ckeditor
    contentsCss: []
    toolbar: 'Phases'
    resize_enabled: false
    extraPlugins: 'autogrow'
  
  saveButton = $('<a href="#save" class="phasesSaveButton">Save</a>')
  saveButton.appendTo '#phasesDialog'
  saveButton.click ->
    $( '#'+id, document ).html editor.val()
    $( '#'+id, provider.getDocument() ).html editor.val()
    provider.setDirty()
    $('body').removeClass 'overlaid'
    false
  
  $('body').addClass 'overlaid'
  event.stopPropagation()
  false
  
editImageObject = (event) ->
  alert 'Image'
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
  mode = object.data('phases')  
  switch mode
    when 'text'
      object.click editTextObject
    when 'image'
      object.click editImageObject
    when 'remove'
      object.click editRemovableObject

$('[data-phases]').each ->
  setupEditor $(this)
