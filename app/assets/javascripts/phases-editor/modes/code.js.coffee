this.phases ||= {}
this.phases.modes ||= {}

codeEditorOnLoad = ->
	f = ->
	  this.jQuery('#code_editor_area').ckeditor
	    startupMode: 'source'
	    toolbar: [['About']]
	
	f.call window.frames['code_editor'].window

this.phases.modes.code =
	init: ->
    phases.modes.active = 'code'
    area = document.createElement('textarea')
    area.value = phases.provider.getCode()
    $('#canvas').html area
    firstLoad = true
    CodeMirror.fromTextArea area, 
      mode: "liquid"
      tabMode: "indent"
      lineNumbers: true
      onChange: (editor) ->
        if firstLoad
          firstLoad = false
        else
          phases.provider.setCode editor.getValue()
        true
    true
