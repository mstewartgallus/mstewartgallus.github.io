import { useId, useRef } from "react"
import { A, Pre as BarePre, Card } from "../../../features/ui";
import { title as titleClass, figure, figcaption } from "./pre.module.css";

export const Pre = ({children, id, title}) => {
    const ref = useRef();
    const caption = useId();
    const focusId = useId();
    return <Card>
               <figure id={id} ref={ref} className={figure}>
                   <figcaption className={figcaption}>
                       <span className={titleClass} id={caption}>{title}</span>
                       &emsp;
                       <A href={`#${id}`} aria-describedby={caption}>Focus</A>
                   </figcaption>
                   <span aria-owns={focusId} />
                   <BarePre>
                       {children}
                   </BarePre>
               </figure>
           </Card>;
};

export default Pre;
