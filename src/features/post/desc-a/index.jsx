import { useId, forwardRef } from "react";
import { A } from "../../../features/ui";
import {
    grid as gridClass
} from "./desc-a.module.css";

const DescAImpl = ({ children, desc, ...props }, ref) => {
    const id = useId();
    return <div role="group">
               <A className={gridClass} aria-describedby={id} ref={ref} {...props}>
                   <span role="presentation">{children}</span>
                   <span id={id} role="presentation">
                       {desc}
                   </span>
               </A>
               <span aria-owns={id} role="presentation" />
           </div>;
};

export const DescA = forwardRef(DescAImpl);

export default DescA;
