import * as React from "react";
import A from "./a.jsx";

const DescAImpl = ({ children, desc, ...props }, ref) => {
    const id = React.useId();
    return <A {...props} aria-describedby={id} ref={ref}>
               {children}
               &emsp;
               <span id={id} aria-hidden="true">{desc}</span>
           </A>;
};

export const DescA = React.forwardRef(DescAImpl);

export default DescA;
