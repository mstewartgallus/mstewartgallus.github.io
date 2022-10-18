Jekyll::Hooks.register :site, :pre_render do |site|
  require "rouge"

  class PoetryLexer < Rouge::RegexLexer
    title 'poetry'
  end
end
