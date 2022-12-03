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

  # FIXME ugly monkey patching of our alternative converter
  class JekyllDocument < Document
    def section
      old = @root.children
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

        hgroup = Element.new :html_element, 'hgroup'
        hgroup.children.push el

        header = Element.new :html_element, 'header'
        header.children.push hgroup

        sect = Section.new level, current, attributes
        sect.children.push header
        current.children.push sect
        current = sect
      end
      @root.children = start.children
    end

    def to_html
      copy = dup
      copy.section
      output, warnings = Kramdown::Converter::Html.convert(copy.root, @options)
      @warnings.concat(warnings)
      output
    end
  end
end
