import * as React from "react";
import { layout, page, sidebar as sidebarClass } from "./layout.module.css";

const Default = () => false;

export const Layout = ({ children }) => {
    const id = React.useId();

    const child = React.Children.only(children);
    const { type, props } = child;

    const {
        Heading = Default,
        Notice = Default,
        Sidebar = Default,
        Foot = Default
    } = type;
    // FIXME detect improper post?

    return <>
               <div className={layout}>
                   <div className={page}>
                       <main data-pagefind-body="" aria-describedby={id}>
                           <header>
                               <hgroup id={id}>
                                   <Heading {...props} />
                               </hgroup>
                               <Notice {...props} />
                           </header>
                           {children}
                       </main>
                       <div className={sidebarClass}>
                           <Sidebar {...props} />
                       </div>
                   </div>
               </div>
               <Foot {...props} />
           </>;
};

export default Layout;
