# frozen_string_literal: true


require 'kramdown'

module Kramdown
  module MyUtils
    def self.section(doc)
    end
  end
end

module MSG
  # em dash and thin spaces
  CAESURA = '&#x2009;&#x2014;&#x2009;'

  class Poem
    attr_reader :stanzas

    def initialize(stanzas)
      @stanzas = stanzas.freeze
    end
  end

  class Stanza
    attr_reader :lines

    def initialize(lines)
      @lines = lines.freeze
    end
  end

  class Line
    attr_reader :parts

    def initialize(parts)
      @parts = parts.freeze
    end
  end

  def parsepoem(content)
    stanzas = []
    content.strip.chomp.each_line("\n\n") do |par|
      stanza = []
      par.chomp.each_line do |line|
        stanza << Line::new(line.split("‖").map { |s| s.strip })
      end
      stanzas << Stanza::new(stanza)
    end
    Poem::new(stanzas)
  end

  def tokramdown(poem)
    doc = Kramdown::Document::new('')
    doc.root.children = poem.stanzas.map do |stanza|
      paragraph = Kramdown::Element.new :p, nil, {'class' => 'stanza'}
      first = true
      stanza.lines.each do |line|
        if not first then
          paragraph.children.push Kramdown::Element.new :br
        end
        first = false
        firstpart = true
        span = Kramdown::Element.new :html_element, 'span', {
                                       'class' => 'line',
                                       'role' => 'presentation'
                                       },
                                     {:category => :span,
                                      :content_model => :span,
                                     :markdown => :span}
        line.parts.each do |part|
          if not firstpart then
            # thin spaces
            span.children.push (Kramdown::Element.new :entity,
                                                      Kramdown::Utils::Entities.entity(8201)),
                               (Kramdown::Element.new :typographic_sym, :mdash),
                               (Kramdown::Element.new :entity,
                                                      Kramdown::Utils::Entities.entity(8201))
          end
          firstpart = false

          # awful hack
          nodes = Kramdown::Document::new(part).root.children[0].children
          span.children.push *nodes
        end
        paragraph.children.push span
      end
      paragraph
    end
    doc
  end

  def poemtohtml(content)
    tokramdown(parsepoem(content)).to_html
  end

  def poemtokd(content)
    tokramdown(parsepoem(content)).to_kramdown
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
    poemtokd(content)
  end
end

Liquid::Template.register_tag('poem', PoemBlock)
