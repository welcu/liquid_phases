interval = 0

check_height = ->
  iframe = $('#canvas > iframe')[0]
  try
    height = iframe.contentDocument.height
    $(iframe).css 'height', "#{height}px"
  catch e
    console.log 'Error'
    clearInterval interval

interval = setInterval check_height, 500
