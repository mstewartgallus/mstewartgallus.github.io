import { scroller } from "./scroll-article.module.css";

export const ScrollArticle = ({children, ...props}) => {
    return <article tabIndex="0" className={scroller} {...props}>
               {children}
           </article>;
};

export default ScrollArticle;
