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
    # Use role="paragraph" to force stanzas to be spoken all at once
    # not sure if the best experience
    stanzas.each do |stanza|
      output << '<p role="paragraph" class="stanza">'

      stanza.each do |line|
        output << "\n"
        output << '<span class="line">' << line << '</span>'
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
