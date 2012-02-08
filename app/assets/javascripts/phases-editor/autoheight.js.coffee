THRESHOLD = 20

interval = 0
last_check = 0

check_height = ->
  iframe = $('#canvas > iframe')[0]
  if iframe
    try
      height = $('body', iframe.contentDocument || iframe.contentWindow.document ).contents('*:visible').height()
      # height = iframe.contentDocument.height
      if height > last_check + THRESHOLD || hight < last_check - THRESHOLD
        $(iframe).css 'height', "#{ height }px"
    catch e
      console.log 'Error'
      clearInterval interval

interval = setInterval check_height, 500
