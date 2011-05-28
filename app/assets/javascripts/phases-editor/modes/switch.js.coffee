$ ->
	$('nav a').click ->
		switch this.href.split('#').pop()
	  	when 'code' 		then phases.modes.code.init()
		  when 'split' 		then phases.modes.split.init()
		  when 'design' 	then phases.modes.design.init()
		  when 'preview' 	then phases.modes.preview.init()
		false
