Example::Application.routes.draw do
  root :to => redirect('/editor')
  phases_editor '/editor'
end
