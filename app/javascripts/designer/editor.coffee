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
    # extraPlugins: 'autogrow'
    filebrowserUploadUrl: '/phases/editor/upload'
  
  saveButton = $('<a href="#save" class="phasesSaveButton">Save</a>')
  saveButton.click ->
    $( '#'+id, document ).html editor.val()
    $( '#'+id, provider.getDocument() ).html editor.val()
    provider.setDirty()
    $('body').removeClass 'overlaid'
    false
  saveButton.appendTo '#phasesDialog'

  closeButton = $('<a href="#close" class="phasesCloseButton">Cancel</a>')
  closeButton.click ->
    $('body').removeClass 'overlaid'
    false
  closeButton.appendTo '#phasesDialog'

  
  $('body').addClass 'overlaid'
  event.stopPropagation()
  false
  
editImageObject = (event) ->
  object = this
  $('#phasesDialog').html ''
  form = $ '''
    <form action="/phases/editor/upload" method="post" enctype="multipart/form-data" target="phasesUploaderTarget">
      <input type="file" name="upload">
      <input type="submit" value="Replace">
    </form>
  '''
  
  target = $ '<iframe style="display: none;" id="phasesUploaderTarget"></iframe>'
  
  form.submit ->
    target.bind 'load', ->
      url = this.contentWindow.document.body.innerHTML
      $( '#'+object.id, document ).attr 'src', url
      $( '#'+object.id, provider.getDocument() ).attr 'src', url
      provider.setDirty()
      $('body').removeClass 'overlaid'

  closeButton = $('<a href="#close" class="phasesCloseButton">Cancel</a>')
  closeButton.click ->
    $('body').removeClass 'overlaid'
    false

  form.appendTo '#phasesDialog'
  target.appendTo '#phasesDialog'
  closeButton.appendTo '#phasesDialog'
  $('body').addClass 'overlaid'
  
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
