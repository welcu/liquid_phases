LiquidPhases::Editor.routes.draw do
  get '/'        , :to => 'editor#show', :as => :editor
  put '/'        , :to => 'editor#update', :as => nil
  get '/code'    , :to => 'editor#code', :as => nil
  get '/preview' , :to => 'editor#preview', :as => nil
  post '/upload' , :to => 'editor#upload', :as => nil
end
