import * as React from "react";
import DescLink from "./desc-link.jsx";

export const Paging = ({ previous, next }) =>
<div>
    { previous &&
      <div>
          <DescLink rel="prev" href={previous.slug}
                    desc={<cite>{previous.title}</cite>}>
              Previous
          </DescLink>
      </div>
    }
    { next &&
      <div>
          <DescLink rel="next" href={next.slug}
                    desc={<cite>{next.title}</cite>}>
              Next
          </DescLink>
      </div>
    }
</div>;


export default Paging;
