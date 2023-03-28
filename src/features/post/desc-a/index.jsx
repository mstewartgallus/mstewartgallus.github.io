import { useId, forwardRef } from "react";
import { A } from "../../../features/ui";

const DescA = ({ children, desc, ...props }, ref) => {
    const id = useId();
    return <div role="presentation">
               <A aria-describedby={id} ref={ref} {...props}>
                   <span role="presentation">{children}</span>
                   &emsp;
                   <span id={id}>
                       {desc}
                   </span>
               </A>
               <span aria-owns={id} />
           </div>;
};

const DescARef = forwardRef(DescA);

export { DescARef as DescA, DescARef as default };
