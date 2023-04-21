import { useId, forwardRef } from "react";
import { A, ClickTrap } from "@features/ui";
import { wrapper } from "./desc.module.css";

const DescA = ({ children, desc, ...props }, ref) => {
    const id = useId();

    return <div role="presentation" className={wrapper}>
               <A aria-describedby={id} {...props} ref={ref}>
                   {children}
                   <ClickTrap />
               </A>
               &emsp;
               <span id={id}>
                   {desc}
               </span>
           </div>;
};

const DescARef = forwardRef(DescA);

export { DescARef as DescA };
