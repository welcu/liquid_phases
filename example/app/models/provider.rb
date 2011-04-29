class Provider
  def code
    template.code
  end
  
  def update(code)
    template.update_attribute :code, code
  end
  
  def mock
    {
      'lorem' => 
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  end
  
  def upload(file)
    '/images/rails.png'
  end
  
  protected
    def template
      @template ||= Template.first || Template.create
    end
end
