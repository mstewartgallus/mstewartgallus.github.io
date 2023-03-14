import { useId, forwardRef } from "react";
import { A } from "../../features/ui";

const DescAImpl = ({ children, desc, ...props }, ref) => {
    const id = useId();
    return <A {...props} aria-describedby={id} ref={ref}>
               {children}
               &emsp;
               <span id={id} aria-hidden="true">{desc}</span>
           </A>;
};

export const DescA = forwardRef(DescAImpl);

export default DescA;
