module LiquidPhases
  DEFAULT_PROVIDER_PROC = Proc.new do |editor|
    raise LiquidPhases::ProviderNotSetError
  end
  
  def self.config
    @config ||= begin
      config = ActiveSupport::OrderedOptions.new
      config.merge!({
        :provider => DEFAULT_PROVIDER_PROC,
        :data_tag => 'phases'
      })
    end
  end
    
  class ProviderNotSetError < StandardError
    def message
      <<-EOM.strip_heredoc
        To use the editor, you must set the provider proc by doing:
        
          LiquidPhases.config.provider = Proc.new do |editor|
            # Your code here
          end
      EOM
    end
  end
end
