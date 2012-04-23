# -*- encoding: utf-8 -*-
require 'base64'
$:.push File.expand_path("../lib", __FILE__)
require "liquid_phases/version"

Gem::Specification.new do |s|
  s.name        = "liquid_phases"
  s.version     = LiquidPhases::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = [ "Sebastian Gamboa" ]
  s.email       = [ Base64.decode64("c2ViYUB3ZWxjdS5jb20=\n") ]
  s.homepage    = ""
  s.summary     = %q{Liquid templates editor}
  s.description = %q{Liquid templates editor}

  s.rubyforge_project = "liquid_phases"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
  
  s.add_runtime_dependency("liquid", '~> 2')
  s.add_runtime_dependency("rails", '~> 3')
  # s.add_runtime_dependency("jquery-rails")
  s.add_development_dependency("rake")
end
