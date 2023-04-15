import {
    disclosure,
    wrapper, wrapperInert,
    content, contentHidden
} from "./panel.module.css";

export const PaneClient = ({children, open, ...props}) => {
    const wrapperClass = [wrapper, open ? '' : wrapperInert].join(' ');
    const contentClass = [content, open ? '' : contentHidden].join(' ');
    return <div className={disclosure} {...props}>
               <div className={wrapperClass} inert={open ? null : "inert"}>
                   <div className={contentClass}>
                       {children}
                   </div>
               </div>
           </div>;
};

export default PaneClient;
