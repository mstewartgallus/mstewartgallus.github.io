import { useId } from "react"
import { Pre as BarePre, Card } from "../../../features/ui";
import { scroller, figure, figcaption } from "./pre.module.css";

export const Pre = ({children, id, title}) => {
    const caption = useId();
    return <Card>
               <section tabIndex="0" id={id} aria-labelledby={title && caption} className={scroller}>
                   <figure className={figure}>
                       {title &&
                        <figcaption id={caption} className={figcaption}>{title}</figcaption>
                       }
                       <BarePre>
                           {children}
                       </BarePre>
                   </figure>
               </section>
           </Card>;
};

export default Pre;
