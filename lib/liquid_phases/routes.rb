module ActionDispatch::Routing
  class Mapper
    def phases_editor(*scope_args)
      scope *scope_args do
        get '/'        , :to => 'liquid_phases/editor#show', :as => :editor
        put '/'        , :to => 'liquid_phases/editor#update', :as => nil
        get '/code'    , :to => 'liquid_phases/editor#code', :as => nil
        get '/preview' , :to => 'liquid_phases/editor#preview', :as => nil
        post '/upload' , :to => 'liquid_phases/editor#upload', :as => nil
      end
    end
  end
end