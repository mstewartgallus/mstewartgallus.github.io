module RunNodeAfter
  def self.process(site, payload)
    return if @processed
    system "node buildindex.mjs"
    @processed = true
  end
end

Jekyll::Hooks.register :site, :post_render do |site, payload|
  RunNodeAfter.process(site, payload)
end
