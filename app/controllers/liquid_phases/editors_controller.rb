module LiquidPhases
  class EditorsController < ApplicationController
    layout false
    include LiquidPhases::ControllerMethods
    
    # Actions
    def show
    end
    
    def code
      render :text => provider.code
    end
    
    def split
    end
    
    def design
    end
    
    def preview
      render :text => Liquid::Template.parse(provider.code).render(provider.mock)
    end

    def update
      provider.update(params[:code])
      render :text => 'OK'
    end
  end
end
