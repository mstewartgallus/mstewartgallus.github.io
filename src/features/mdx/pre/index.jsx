import { useId, useRef } from "react"
import { A, Pre as BarePre, Card } from "@features/ui";
import { autolink, title as titleClass, figure, figcaption } from "./pre.module.css";

export const Pre = ({children, id, title}) => {
    const ref = useRef();
    const gid = useId();
    const caption = `${gid}-caption`;
    const focusId = `${gid}-focus`;
    // FIXME aria-owns isn't supported on Safari
    return <Card>
               <figure id={id} ref={ref} className={figure}>
                   <figcaption className={figcaption}>
                       <span className={titleClass} id={caption}>{title}</span>
                       &emsp;
                       <A id={focusId} className={autolink} href={`#${id}`} aria-describedby={caption}>Focus</A>
                   </figcaption>
                   <span aria-owns={focusId} />
                   <BarePre>
                       {children}
                   </BarePre>
               </figure>
           </Card>;
};

export default Pre;
