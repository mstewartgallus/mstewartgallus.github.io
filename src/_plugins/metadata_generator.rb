module Jekyll
    class Metadata < Generator
        safe true
        priority :low
        def generate(site)
          characters = Set::new
          site.posts.docs.each do |post|
            c = post.data['characters']
            if c.nil? then next end
            characters.merge(c)
          end
          array = characters.to_a
          array.sort!
          site.config['characters'] = array
        end
    end
end
