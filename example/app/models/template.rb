class Template < ActiveRecord::Base
  before_create :load_defaults
  
  protected
    def load_defaults
      self.code = <<-EOC.strip_heredoc
        <!DOCTYPE html>
        <html>
          <head>
            <title>Example</title>
          </head>
          <body>
            {{ lorem }}
          </body>
        </html>
      EOC
    end
end
