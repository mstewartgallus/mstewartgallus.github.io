import {
    disclosure,
    wrapper, wrapperInert,
    content, contentHidden
} from "./panel.module.css";

export const PaneClient = ({children, open}) => {
    const wrapperClass = [wrapper, open ? '' : wrapperInert].join(' ');
    const contentClass = [content, open ? '' : contentHidden].join(' ');
    return <div className={disclosure} inert={open ? null : "inert"}>
               <div className={wrapperClass}>
                   <div className={contentClass}>
                       {children}
                   </div>
               </div>
           </div>;
};

export default PaneClient;
