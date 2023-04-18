import { useId } from "react";

export const Footer = ({children, heading, ...props}) => {
    const id = useId();
    return <footer aria-labelledby={id} {...props}>
               <hgroup id={id}>
                   {heading}
               </hgroup>
               {children}
           </footer>;
};
