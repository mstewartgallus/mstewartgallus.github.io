# frozen_string_literal: true

module MSG
  def parsepoem(content)
    stanzas = []
    content.strip.chomp.each_line("\n\n") do |par|
      stanza = []
      par.chomp.each_line do |line|
        stanza << line.chomp
      end
      stanzas << stanza
    end
    stanzas
  end

  def tohtml(stanzas)
    output = String.new
    stanzas.each_with_index do |stanza, index|
      output << '<p class="stanza">'
      first = true
      stanza.each do |line|
        if not first then
          output << '<br>'
        end
        first = false
        output << '<span role="presentation" class="line" markdown="span">'
        output << line
        output << '</span>'
      end
      output << '</p>'
    end
    output.freeze
  end

  def tokd(stanzas)
    output = String.new
    stanzas.each_with_index do |stanza|
      output << ''
      first = true
      stanza.each do |line|
        if not first then
          output << '\\\\'
          output << "\n"
        end
        first = false
        output << '<span>'
        output << line
        output << '</span>'
        output << '{:.line role="presentation"}'
      end
      output << "\n"
      output << "^"
      output << "\n"
      output << '{:.stanza}'
      output << "\n\n"
    end
    output.freeze
  end

  def poemtohtml(content)
    tohtml(parsepoem(content))
  end

  def poemtokd(content)
    tohtml(parsepoem(content))
  end
end

module Jekyll
  class PoemConverter < Converter
    include MSG

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
    content = Liquid::Template.parse(super).render context

    kd = poemtokd(content)
    kd
  end
end

Liquid::Template.register_tag('poem', PoemBlock)
