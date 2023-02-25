import * as React from "react";
import { page, sidebar as sidebarClass } from "./page.module.css";

export const Page = ({children, sidebar, heading, notice}) => {
    const id = React.useId();
    return <div className={page}>
               <main data-pagefind-body="" aria-describedby={id}>
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
           </div>;
};

export default Page;
