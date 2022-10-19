module Jekyll
  class PoetryBlock < Liquid::Block
    def render(context)
      text = super

      <<-POEM.chomp
<article class="poetry">#{text}</article>
POEM
    end
  end
end

Liquid::Template.register_tag('poetry', Jekyll::PoetryBlock)
