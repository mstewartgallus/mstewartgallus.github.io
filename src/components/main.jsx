import * as React from "react";
import Notice from "../components/notice.jsx";

export const Main = ({children, title, subtitle, notice}) => {
    const id = React.useId();
    return <main data-pagefind-body aria-describedby={id}>
               <header>
                   <hgroup>
                       <h1 id={id}>{title}</h1>
                       {
                           subtitle && <p>{subtitle}</p>
                       }
                   </hgroup>
                   <Notice notice={notice} />
               </header>
               {children}
           </main>;
};

export default Main;
