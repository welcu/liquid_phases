this.phases ||= {}
this.phases.modes ||= {}

this.phases.modes.preview =
	init: ->
    phases.modes.active = 'preview'
    iframe = $('<iframe />')
    iframe.attr 'src', phases.config.location+'/preview'
    $('#canvas').html iframe
    true
