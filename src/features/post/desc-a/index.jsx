import { useId, forwardRef } from "react";
import { A } from "@features/ui";
import { wrapper, label, clickTrap } from "./desc.module.css";

const DescA = ({ children, desc, href, ...props }, ref) => {
    const id = useId();

    return <div role="presentation" className={wrapper}>
               <A aria-describedby={id} href={href} {...props} ref={ref}>
                   {children}
                   <span
                       className={clickTrap}
                       aria-hidden="true" />
               </A>
               &emsp;
               <span className={label}
                     id={id}>
                   {desc}
               </span>
           </div>;
};

const DescARef = forwardRef(DescA);

export { DescARef as DescA, DescARef as default };
