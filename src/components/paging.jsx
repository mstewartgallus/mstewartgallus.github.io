import * as React from "react";
import { Link } from "gatsby";
import { paging } from "./paging.module.css";

const Prev = ({ children, href }) =>
      href &&
    <div>
        <dt><Link to={href}>Previous</Link></dt>
        <dd>{children}</dd>
    </div>;

const Next = ({ children, href }) =>
      href &&
    <div>
        <dt><Link to={href}>Next</Link></dt>
        <dd>{children}</dd>
    </div>;

export const Paging = ({ previous, next, phref, nhref }) => {
    const id = React.useId();
    if (!phref && !nhref) {
        return null;
    }
    return <nav className={paging} aria-labelledby={id}>
               <header className="sr-only">
                   <hgroup>
                       <h2 id={id}>Paging</h2>
                   </hgroup>
               </header>
               <dl>
                   <Prev href={phref}><cite>{previous}</cite></Prev>
                   <Next href={nhref}><cite>{next}</cite></Next>
               </dl>
           </nav>;
};

export default Paging;
