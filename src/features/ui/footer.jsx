import { useId } from "react";
import { Assistive } from "../../features/util";

export const Footer = ({children, heading, ...props}) => {
    const id = useId();
    return <footer aria-labelledby={id} {...props}>
               <Assistive>
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
               </Assistive>
               {children}
           </footer>;
};

export default Footer;
