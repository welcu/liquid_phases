module LiquidPhases
  class EditorController < ApplicationController
    layout false
    include LiquidPhases::ControllerMethods
    
    # Actions
    def show
    end
    
    def code
      render :text => provider.code
    end
    
    def preview
      render :text => Liquid::Template.parse(params[:code]).render(provider.mock)
    end

    def update
      provider.update(params[:code])
      render :text => 'OK'
    end
    
    def upload
      @url = provider.upload(params[:upload])
      
      if params[:CKEditor]
        render :text => <<-EOF
          <script type="text/javascript">
            window.parent.CKEDITOR.tools.callFunction(#{ params[:CKEditorFuncNum] }, '#{ @url }');
          </script>
        EOF
      else
        render :text => @url
      end
    end
  end
end
