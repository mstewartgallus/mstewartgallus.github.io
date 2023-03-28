import { useScrollRestoration } from "gatsby";
import { viewport } from "./viewport.module.css";

export const Viewport = ({children}) => {
    const scroll = useScrollRestoration(`viewport`)
    return <div className={viewport} {...scroll}>
               {children}
           </div>;
};

export default Viewport;
