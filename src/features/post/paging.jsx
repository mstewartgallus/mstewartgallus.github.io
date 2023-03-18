import { DescA } from "./desc-a";

export const Paging = ({ previous, next }) =>
<div>
      <div>
          { previous &&
            <DescA rel="prev" href={previous.slug}
                   desc={<cite>{previous.title}</cite>}>
                Previous
            </DescA>
          }
      </div>
      <div>
          { next &&
            <DescA rel="next" href={next.slug}
                   desc={<cite>{next.title}</cite>}>
                Next
            </DescA>
          }
      </div>
</div>;


export default Paging;
