import { useId, forwardRef } from "react";
import { A } from "../../../features/ui";

const DescA = ({ children, desc, ...props }, ref) => {
    const id = useId();
    return <div role="group">
               <A aria-describedby={id} ref={ref} {...props}>
                   <span role="presentation">{children}</span>
                   &emsp;
                   <span id={id} role="presentation">
                       {desc}
                   </span>
               </A>
               <span className="sr-only" aria-owns={id} role="presentation" />
           </div>;
};

const DescARef = forwardRef(DescA);

export { DescARef as DescA, DescARef as default };
