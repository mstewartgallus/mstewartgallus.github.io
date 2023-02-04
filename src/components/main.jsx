import * as React from "react";

export const Main = ({children, heading, notice}) => {
    const id = React.useId();
    return <main data-pagefind-body aria-describedby={id}>
               <header>
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
                   {notice}
               </header>
               {children}
           </main>;
};

export default Main;
