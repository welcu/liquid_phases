module ActionDispatch::Routing
  class Mapper
    def phases_editor(*scope_args)
      scope *scope_args do
        get '/'        , :to => 'liquid_phases/editor#show'
        put '/'        , :to => 'liquid_phases/editor#update'
        get '/code'    , :to => 'liquid_phases/editor#code'
        get '/preview' , :to => 'liquid_phases/editor#preview'
        post '/upload' , :to => 'liquid_phases/editor#upload'
      end
    end
  end
end