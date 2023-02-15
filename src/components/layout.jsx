import * as React from "react";
import { layout, page, sidebar as sidebarClass } from "./layout.module.css";
import { PostProvider } from "../../src/components/post.jsx";

export const Layout = ({ children }) => {
    const id = React.useId();
    return <PostProvider
               Post={({ children, sidebar, heading, notice }) =>
                   <div className={layout}>
                       <div className={page}>
                           <main data-pagefind-body
                                 aria-describedby={id}>
                               <header>
                                   <hgroup id={id}>
                                       {heading}
                                   </hgroup>
                                   {notice}
                               </header>
                               {children}
                           </main>
                           <div className={sidebarClass}>
                               {sidebar}
                           </div>
                       </div>
                   </div>
               }>
               {children}
           </PostProvider>;
};

export default Layout;
