style = document.createElement('link')
style.href = '/stylesheets/editor/overlay.css'
style.rel = "stylesheet"
style.type = "text/css"

s = document.getElementsByTagName('script')[0]
s.parentNode.insertBefore(style, s)

overlay = $ '''
  <div class="overlay">
    <div class="wrap-outer">
      <div class="wrap">
        <div id="phasesDialog">
        </div>
      </div>
    </div>
  </div>
  '''

overlay.appendTo('body')
