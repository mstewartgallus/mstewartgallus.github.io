import { useId, useRef } from "react"
import { A, Pre as BarePre, Card } from "../../../features/ui";
import { scroller, figure, figcaption } from "./pre.module.css";

export const Pre = ({children, id, title}) => {
    const ref = useRef();
    const caption = useId();
    return <Card>
               <figure ref={ref} className={figure}>
                   <figcaption id={caption} className={figcaption}>
                       {title}
                   </figcaption>
                   &emsp;
                   <A href={`#${id}`} aria-describedby={caption}>Focus</A>
                   <article id={id} aria-labelledby={caption}
                            className={scroller}>
                       <BarePre>
                           {children}
                       </BarePre>
                   </article>
               </figure>
           </Card>;
};

export default Pre;
