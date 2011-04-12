module LiquidPhases
  module ControllerMethods
    module ClassMethods
      
    end
    
    module InstanceMethods
      def provider
        @provider ||= LiquidPhases.config.provider.call(self)
      end
      
      def title
        'Phases Editor'
      end
    end
    
    def self.included(receiver)
      receiver.extend         ClassMethods
      receiver.send :include, InstanceMethods
      receiver.send :helper_method, :provider, :title
    end
  end
end
