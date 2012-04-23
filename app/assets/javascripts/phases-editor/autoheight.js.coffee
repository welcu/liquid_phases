THRESHOLD = 20

interval = 0
last_check = 0

check_height = ->
  iframe = $('#canvas > iframe')[0]
  if iframe
    try
      height = _( 
        $('body', iframe.contentDocument || iframe.contentWindow.document )
          .css('overflow', 'hidden')
          .contents('*:visible').not(".overlay")
      ).reduce (m,e) -> 
          m + $(e).height()
        , 0
      return unless height
      # height = iframe.contentDocument.height
      # if height > last_check + THRESHOLD || height < last_check - THRESHOLD
        # last_check = height
      $(iframe).css 'height', "#{ height + THRESHOLD*2 }px"
    catch e
      console.log 'Error'
      clearInterval interval
      $(iframe).css 'overflow-y', 'auto'
  else
    last_check = 0
    
	  

interval = setInterval check_height, 500
