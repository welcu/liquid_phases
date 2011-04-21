setupEditor = (object) ->
  mode = object.data('phases')
  object.click (event) ->
    alert 'clicked!'
    event.stopPropagation()
    return false;
  
$('[data-phases]').each ->
  setupEditor $(this)
