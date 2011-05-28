module LiquidPhases
  class Engine < Rails::Engine
    isolate_namespace LiquidPhases
    
    initializer "liquid_phases.add_assets_precompilers" do |app|
      app.config.assets.precompile += %w(
        phases-editor.js
        phases-editor.css
        phases-designer.js
        phases-designer.css
      )
    end
  end
end
