import { Cite, DescA } from "@features/ui";

export const Paging = ({ previous, next }) =>
<div>
      <div>
          { previous &&
            <DescA rel="prev" href={previous.slug}
                   desc={<Cite>{previous.title}</Cite>}>
                Previous
            </DescA>
          }
      </div>
      <div>
          { next &&
            <DescA rel="next" href={next.slug}
                   desc={<Cite>{next.title}</Cite>}>
                Next
            </DescA>
          }
      </div>
</div>;
