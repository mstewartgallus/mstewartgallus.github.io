import * as React from "react";
import Link from "./link.jsx";

const DescLink = ({ children, desc, ...props }) => {
    const id = React.useId();
    return <Link {...props}>
               <span aria-describedby={id}>{children}</span>
               &emsp;
               <span id={id} aria-hidden="true">{desc}</span>
           </Link>;
};

export default DescLink;
