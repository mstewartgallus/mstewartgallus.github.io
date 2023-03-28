import { useId } from "react"
import { useScrollRestoration } from "gatsby"
import { Pre as BarePre } from "../../../features/ui";
import { panel, figure, figcaption } from "./pre.module.css";

const Panel = ({children, ...props}) => {
    const scroll = useScrollRestoration(`Panel`);
    return <article tabIndex="0" className={panel} {...scroll} {...props}>
               {children}
           </article>;
};

export const Pre = ({children, id, title}) => {
    const caption = useId();
    return <figure id={id} className={figure}>
               {title &&
                <figcaption id={caption} className={figcaption}>{title}</figcaption>
               }
               <Panel aria-labelledby={title && caption}>
                   <BarePre>
                       {children}
                   </BarePre>
               </Panel>
           </figure>;
};

export default Pre;
