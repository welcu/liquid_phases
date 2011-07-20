this.phases ||= {}
this.phases.modes ||= {}

this.phases.modes.preview =
	init: ->
    phases.modes.active = 'preview'
    iframe = $('<iframe name="phases_preview"></iframe>')
    form = $ """
      <form action="#{phases.config.location}/preview" method="post" target="phases_preview" style="display:none;">
        <input name="utf8" type="hidden" value="✓">
        <input name="#{$('meta[name=csrf-param]').attr('content')}" type="hidden" value="#{$('meta[name="csrf-token"]').attr('content');}">
        <textarea name="code">
        #{ phases.provider.getCode()}
        </textarea>
      </form>
      """
    $('#canvas').html iframe
    form.appendTo('#canvas').submit()
    true
