this.phases ||= {}
this.phases.modes ||= {}

this.phases.modes.preview =
	init: ->
    phases.modes.active = 'preview'
    iframe = $('<iframe name="phases_preview"></iframe>')
    form = $ """
      <form action="#{phases.config.location}/preview"
        method="post"
        target="phases_preview"
        style="display:none;">
        <input type="hidden" name="utf8" value="✓">
        <input type="hidden"
                name="#{ $('meta[name=csrf-param]').attr('content') }"
                value="#{ $('meta[name="csrf-token"]').attr('content') }">
        <textarea name="code">
        #{ phases.provider.getCode()}
        </textarea>
      </form>
      """

    $('#canvas').html iframe
    form.appendTo('#canvas').submit()
    true
