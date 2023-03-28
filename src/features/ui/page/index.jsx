import { useScrollRestoration } from "gatsby"
import {
    layout, page,
    mainbar as mainbarClass, sidebar as sidebarClass
} from "./page.module.css";

export const Page = ({children, sidebar}) => {
    const scroll = useScrollRestoration(`page`)
    return <div className={layout} {...scroll}>
               <div className={page}>
                   <div className={mainbarClass}>
                       {children}
                   </div>
                   <div className={sidebarClass}>
                       {sidebar}
                   </div>
               </div>
           </div>;
};

export default Page;
