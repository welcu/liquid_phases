this.phases ||= {}
this.phases.modes ||= {}

this.phases.modes.preview = {
	init: ->
		iframe = $('<iframe />')
		iframe.attr 'src', '/phases/editor/preview'
		$('#canvas').html iframe
		true
}
