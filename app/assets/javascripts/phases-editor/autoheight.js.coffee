THRESHOLD = 20

interval = 0
last_check = 0

check_height = ->
  iframe = $('#canvas > iframe')[0]
  if iframe
    try
      height = $('body', iframe.contentDocument || iframe.contentWindow.document ).contents('*:visible').height()
      return unless height
      # height = iframe.contentDocument.height
      if height > last_check + THRESHOLD || height < last_check - THRESHOLD
        last_check = height
        $(iframe).css 'height', "#{ height + THRESHOLD }px"
        $('#canvas').css 'height', "#{ height + THRESHOLD }px"
    catch e
      console.log 'Error'
      clearInterval interval

interval = setInterval check_height, 500
