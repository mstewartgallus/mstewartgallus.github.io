import { useScrollRestoration } from "gatsby";
import { scroller } from "./scroller.module.css";

export const RootScroller = ({children}) => {
    const scroll = useScrollRestoration('root');
    return <div className={scroller} {...scroll}>{children}</div>;
};
