import * as React from "react";
import { Link } from "gatsby";

const Prev = ({ children, href }) =>
      href &&
    <div>
        <dt><Link rel="prev" to={href}>Previous</Link></dt>
        <dd><cite>{children}</cite></dd>
    </div>;

const Next = ({ children, href }) =>
      href &&
    <div>
        <dt><Link rel="next" to={href}>Next</Link></dt>
        <dd><cite>{children}</cite></dd>
    </div>;

export const Paging = ({ previous, next }) =>
<dl>
    { previous && <Prev href={previous.slug}>{previous.title}</Prev> }
    { next && <Next href={next.slug}>{next.title}</Next> }
</dl>;


export default Paging;
