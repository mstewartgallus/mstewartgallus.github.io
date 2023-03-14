import { useId } from "react";

export const Section = ({children, heading, ...props}) => {
    const id = useId();
    return <section {...props} aria-labelledby={id}>
               <header>
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
               </header>
               {children}
           </section>;
};

export default Section;
