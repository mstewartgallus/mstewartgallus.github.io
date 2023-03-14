import { useId } from "react";

export const Header = ({ children, heading, ...props }) => {
    const id = useId();
    return <header {...props} aria-describedby={id}>
               <hgroup id={id}>
                   {heading}
               </hgroup>
               {children}
           </header>;
};

export default Header;
