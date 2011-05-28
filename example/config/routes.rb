Example::Application.routes.draw do
  root :to => redirect('/editor')
  mount LiquidPhases::Engine => '/editor'
end
