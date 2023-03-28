import { Pre as BarePre } from "../../../features/ui";
import { figure, figcaption } from "./pre.module.css";

export const Pre = ({children, id, title}) => {
    return <figure tabIndex="0" id={id} className={figure}>
               {title && <figcaption className={figcaption}>{title}</figcaption>}
               <BarePre>
                   {children}
               </BarePre>
           </figure>;
};

export default Pre;
