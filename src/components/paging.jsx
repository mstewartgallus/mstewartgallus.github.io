import * as React from "react";
import { Link } from "gatsby";
import { paging as pagingClass } from "./paging.module.css";

const Prev = ({ children, href }) =>
      href &&
    <div>
        <dt><Link rel="previous" to={href}>Previous</Link></dt>
        <dd><cite>{children}</cite></dd>
    </div>;

const Next = ({ children, href }) =>
      href &&
    <div>
        <dt><Link rel="next" to={href}>Next</Link></dt>
        <dd><cite>{children}</cite></dd>
    </div>;

const Pages = ({ previous, next }) =>
<dl>
    { previous && <Prev href={previous.slug}>{previous.title}</Prev> }
    { next && <Next href={next.slug}>{next.title}</Next> }
</dl>;


export const Paging = ({ paging }) => {
    const id = React.useId();

    const {previous, next} = paging.ALL;
    return <nav className={pagingClass} aria-labelledby={id}>
               <header className="sr-only">
                   <hgroup>
                       <h2 id={id}>Paging</h2>
                   </hgroup>
               </header>
               <Pages previous={previous} next={next} />
           </nav>;
};

export default Paging;
