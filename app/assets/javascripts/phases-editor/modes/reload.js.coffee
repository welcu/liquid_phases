this.phases ||= {}
this.phases.modes ||= {}


this.phases.modes.reload = ->  
  mode = switch @active
    when 'code' 		then @code
    when 'split' 		then @split
    when 'design' 	then @design
    when 'preview' 	then @preview
    else                 @design
  mode.init()
  true
