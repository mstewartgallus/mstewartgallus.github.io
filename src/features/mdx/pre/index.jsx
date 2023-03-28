import { useId } from "react"
import { useScrollRestoration } from "gatsby"
import { Pre as BarePre } from "../../../features/ui";
import { ScrollArticle } from "../scroll-article";
import { figure, figcaption } from "./pre.module.css";

export const Pre = ({children, id, title}) => {
    const caption = useId();
    return <figure id={id} className={figure}>
               {title &&
                <figcaption id={caption} className={figcaption}>{title}</figcaption>
               }
               <ScrollArticle aria-labelledby={title && caption}>
                   <BarePre>
                       {children}
                   </BarePre>
               </ScrollArticle>
           </figure>;
};

export default Pre;
