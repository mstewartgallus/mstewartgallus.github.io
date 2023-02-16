import * as React from "react";
import A from "./a.jsx";

const DescA = ({ children, desc, ...props }) => {
    const id = React.useId();
    return <A {...props}>
               <span aria-describedby={id}>{children}</span>
               &emsp;
               <span id={id} aria-hidden="true">{desc}</span>
           </A>;
};

export default DescA;
