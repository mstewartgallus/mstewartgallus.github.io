import { useId, useRef } from "react"
import { A, Pre as BarePre } from "@features/ui";
import { autolink, title as titleClass, figure, figcaption } from "./pre.module.css";

export const Pre = ({children, id, title}) => {
    const ref = useRef();
    const gid = useId();
    const caption = `${gid}-caption`;
    const focusId = `${gid}-focus`;
    // FIXME aria-owns isn't supported on Safari
    return <figure id={id} ref={ref} className={figure}>
               <figcaption id={caption} className={figcaption}>
                   <span className={titleClass}>{title}</span>
               </figcaption>
               <A id={focusId} className={autolink} href={`#${id}`} aria-describedby={caption}>Focus</A>
               <BarePre>
                   {children}
               </BarePre>
           </figure>;
};
