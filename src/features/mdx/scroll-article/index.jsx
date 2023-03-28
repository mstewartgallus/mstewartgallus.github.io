import { useScrollRestoration } from "gatsby"
import { scroller } from "./scroll-article.module.css";

export const ScrollArticle = ({children, ...props}) => {
    const scroll = useScrollRestoration(`ScrollArticle`);
    return <article tabIndex="0" className={scroller} {...scroll} {...props}>
               {children}
           </article>;
};

export default ScrollArticle;
