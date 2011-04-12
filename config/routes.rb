Rails.application.routes.draw do
  resource :editor,
      :as => :phases_editor,
      :path => 'phases/editor',
      :module => 'liquid_phases',
      :only => [:show, :update] do
    
    member do
      get :code
      get :split
      get :design
      get :preview
    end
  end
end
