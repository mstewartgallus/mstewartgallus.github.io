# -*- coding: utf-8; frozen_string_literal: true -*-

require 'kramdown'

module Kramdown
  class Section < Element
    attr_reader :level, :parent

    def initialize(level, parent, attr = nil)
      super :html_element, 'section', attr
      @level = level
      @parent = parent
    end
  end

  module Converter
    class SectionHtml < Html
      def convert_root(root, indent)
        old = root.children
        # FIXME handle header offsets better
        start = Section.new 1, :nil
        current = start
        for el in old
          if el.type != :header
            current.children.push el
            next
          end
          level = el.options()[:level]

          if level <= current.level
            current = current.parent
          end

          # FIXME set auto ids option
          id = el.attr()['id']
          attributes = {}
          if id != :nil
          then
            attributes['aria-labelledby'] = id
          end

          sect = Section.new level, current, attributes
          sect.children.push el
          current.children.push sect
          current = sect
        end
        root.children = start.children
        super(root, indent)
      end
    end
  end
end

# FIXME ugly monkey patching of our alternative converter
module Kramdown
  class JekyllDocument < Document
    def to_html
      output, warnings = Kramdown::Converter::SectionHtml.convert(@root, @options)
      @warnings.concat(warnings)
      output
    end
  end
end
