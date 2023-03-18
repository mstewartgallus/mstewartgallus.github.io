import { useId, forwardRef } from "react";
import { A } from "../../../features/ui";
import {
    grid as gridClass,
    real as realClass,
    fake as fakeClass,
    desc as descClass
} from "./desc-a.module.css";

const DescAImpl = ({ children, desc, ...props }, ref) => {
    const id = useId();
    return <dl className={gridClass} role="presentation">
               <div>
                   <dt className={realClass} role="presentation">
                       <A aria-describedby={id} ref={ref} {...props}>
                           {children}
                       </A>
                   </dt>
                   <dd className={fakeClass} aria-hidden="true">
                       <A {...props}>
                           {children}
                       </A>
                   </dd>
                   <dd id={id} className={descClass} role="presentation">
                       {desc}
                   </dd>
               </div>
           </dl>;
};

export const DescA = forwardRef(DescAImpl);

export default DescA;
