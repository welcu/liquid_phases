$ ->
  if phases.compatibility.check()
    phases.provider.init()
    phases.modes.design.init()
  else
    phases.compatibility.warn()