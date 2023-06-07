import { useId, forwardRef } from "react";
import { BlockA, ClickTrap } from "@features/ui";
import { wrapper } from "./desc.module.css";

export const DescA = forwardRef(({ children, desc, ...props }, ref) => {
    const id = useId();

    return <div role="presentation" className={wrapper}>
               <BlockA aria-describedby={id} {...props} ref={ref}>
                   {children}
                   <ClickTrap />
               </BlockA>
               &emsp;
               <span id={id}>
                   {desc}
               </span>
           </div>;
});
DescA.displayName = `DescA`;
