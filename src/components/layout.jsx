import * as React from "react";
import { layout, page, sidebar as sidebarClass } from "./layout.module.css";
import { PostProvider } from "../../src/components/post.jsx";

const Pick = ({children, ix}) =>
<PostProvider value={ix}>
    {children}
</PostProvider>;

export const Layout = ({ children }) => {
    const id = React.useId();

    // FIXME detect improper post?

    return <>
               <div className={layout}>
                   <div className={page}>
                       <main data-pagefind-body="" aria-describedby={id}>
                           <header>
                               <hgroup id={id}>
                                   <Pick ix="heading">{children}</Pick>
                               </hgroup>
                               <Pick ix="notice">{children}</Pick>
                           </header>
                           <Pick ix="children">{children}</Pick>
                       </main>
                       <div className={sidebarClass}>
                           <Pick ix="sidebar">{children}</Pick>
                       </div>
                   </div>
               </div>
               <Pick ix="foot">{children}</Pick>
           </>;
};

export default Layout;
