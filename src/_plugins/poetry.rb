module MSG
  def parsepoem(content)
    stanzas = []
    content.chomp.each_line("\n\n") do |par|
      stanza = []
      par.chomp.each_line do |line|
        stanza << line.chomp
      end
      stanzas << stanza
    end
    stanzas
  end

  def tohtml(stanzas)
    output = ""
    output << '<div class="stanzas">'
    output << "\n"
    stanzas.each do |stanza|
      # role="paragraph" is required to force reading as a paragraph
      # even though CSS makes span a block
      output << '<p class="stanza">'
      stanza.each do |line|
        output << "\n"
        output << '<span class="line">' << line << '</span>'
        # FIXME only insert a hidden full stop if needed
        # FIXME use otehr whitespace characters?
        output << '<span aria-label=" . " class="line-end"></span><br class="line-br">'
      end
      output << "\n"
      output << '</p>'
      output << "\n"
    end
    output << '</div>'
    output.freeze
  end

  def tomarkdown(stanzas)
    output = ''
    stanzano = 1
    stanzas.each do |stanza|
      output << stanzano.to_s << ". "
      stanzano = 1 + stanzano

      start = true
      lineno = 1
      stanza.each do |line|
        if not start then
          output << "\n"
          output << "   "
        end
        start = false
        output << lineno.to_s << '. ' << line
        lineno = 1 + lineno
      end
      output << "\n"
      output << "   {:.stanza}"
      output << "\n"
    end
    output << "{:.stanzas}"
    # FIXME wrap with .poem
    output.freeze
  end

  def poemtohtml(content)
    tohtml(parsepoem(content))
  end

  def poemtomarkdown(content)
    tomarkdown(parsepoem(content))
  end
end

module Jekyll
  class PoemConverter < Converter
    include MSG

    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.poem$/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      poemtohtml(content)
    end
  end
end

class PoemBlock < Liquid::Block
  include MSG

  def render(context)
    text = super
    poemtomarkdown(text)
  end
end

Liquid::Template.register_tag('poem', PoemBlock)
