# frozen_string_literal: true

module Pagefind
  def self.process(site, payload)
    return if @processed
    Process.wait (Process.spawn 'yarn', 'run', 'pagefind')
    @processed = true
  end
end

Jekyll::Hooks.register :site, :post_write do |site, payload|
  Pagefind.process(site, payload)
end
