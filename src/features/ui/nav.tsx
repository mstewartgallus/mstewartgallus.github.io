import { useId } from "react";
import type { FC, ReactNode, HTMLAttributes } from "react";

export interface NavProps extends HTMLAttributes<HTMLElement> {
    heading?: ReactNode;
}

export const Nav: FC<NavProps> = ({children, heading, ...props}) => {
    const id = useId();
    return <nav aria-labelledby={id} {...props}>
               <header className="sr-only" id={id}>
                   <hgroup>
                       {heading}
                   </hgroup>
               </header>
               {children}
           </nav>;
};

export default Nav;
