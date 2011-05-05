Example::Application.routes.draw do
  root :to => redirect('/editor')
  phases_editor '/editor', :editor => 'base'
  phases_editor '/editor2', :editor => '2'
  phases_editor '/editor3', :editor => '3'
end
