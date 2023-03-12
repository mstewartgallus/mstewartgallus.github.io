import { useId } from "react";

export const Main = ({children, heading, notice, ...props}) => {
    const id = useId();
    return <main {...props} data-pagefind-body="" aria-describedby={id}>
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
