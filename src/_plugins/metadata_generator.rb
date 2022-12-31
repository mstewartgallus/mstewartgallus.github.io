module Jekyll
    class Metadata < Generator
        safe true
        priority :low
        def generate(site)
          for meta in ['places', 'characters'] do
            set = Set::new
            site.posts.docs.each do |post|
              c = post.data[meta]
              if c.nil? then next end
              set.merge(c)
            end
            array = set.to_a
            array.sort!
            site.config[meta] = array
          end
        end
    end
end
