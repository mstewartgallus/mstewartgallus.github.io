# frozen_string_literal: true

require 'kramdown'

module Kramdown
  class Section < Element
    attr_reader :level, :parent

    def initialize(level, parent, attr = nil)
      super :html_element, 'section', attr, {:category => :block, :content_model => :block}
      @level = level
      @parent = parent
    end
  end

  module MyUtils
    def self.section(doc)
      old = doc.root.children
      # FIXME handle header offsets better
      start = Section.new 1, nil
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
        if id != nil
        then
          attributes['aria-labelledby'] = id
        end

        hgroup = Element.new :html_element, 'hgroup', nil, {:category => :block, :content_model => :block}

        hgroup.children.push el

        header = Element.new :html_element, 'header', nil, {:category => :block, :content_model => :block}
        header.children.push hgroup

        if id != nil
        then
          a = Element.new :a, nil, {'href' => '#' + id,'rel' => 'bookmark'}
          a.children = el.children
          el.children = [a]
        end

        sect = Section.new level, current, attributes
        sect.children.push header
        current.children.push sect
        current = sect
      end
      doc.root.children = start.children
    end

    def self.autoFigure(el)
      if el.type == :html_element and el.value == 'figure'
      then
        swabFigure(el)
      end

      for el in el.children
        autoFigure(el)
      end
    end

    def self.swabFigure(figure)
      id = figure.attr()['id']
      if id == nil then
        return
      end

      caption = nil
      for child in figure.children do
        if child.type == :html_element and child.value == 'figcaption' then
          caption = child
          break
        end
      end
      if caption == nil then
        return
      end

      a = Element.new :a, nil, {'href' => '#' + id, 'rel' => 'bookmark'}
      a.children = caption.children
      caption.children = [a]
    end
  end

  # FIXME ugly monkey patching of our alternative converter
  class JekyllDocument < Document
    def to_html
      copy = dup
      MyUtils.section(copy)
      MyUtils.autoFigure(copy.root)
      output, warnings = Kramdown::Converter::Html.convert(copy.root, @options)
      @warnings.concat(warnings)
      output
    end
  end
end
