import * as React from "react";
import ListNotice from "./list-notice.jsx";

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
                   <ListNotice notice={notice} />
               </header>
               {children}
           </main>;
};

export default Main;
