module Jekyll
  class PoemConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.poem$/i
    end

    def output_ext(ext)
      ".html"
    end

    def parse(content)
      stanzas = []
      content.chomp.each_line("\n\n") do |par|
        stanza = []
        par.chomp.each_line do |line|
          stanza << line
        end
        stanzas << stanza
      end
      stanzas
    end

    def convert(content)
      output = ""
      parse(content).each do |stanza|
        output << "<p>"

        start = true
        stanza.each do |line|
          if not start then
            output << "<br />"
          end
          start = false
          output << line
        end
        output << "</p>"
      end
      output
    end
  end
end

class PoetryBlock < Liquid::Block
  def render(context)
    text = super
    <<-POEM.chomp
<article class="poetry">#{text}</article>
POEM
  end
end

Liquid::Template.register_tag('poetry', PoetryBlock)
