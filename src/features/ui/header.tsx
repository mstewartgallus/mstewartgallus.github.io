import type { FC, ReactNode, HTMLAttributes } from "react";
import { useId } from "react";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
    heading?: ReactNode;
}

export const Header: FC<HeaderProps> = ({children, heading, ...props}) => {
    const id = useId();
    return <header aria-labelledby={id} {...props}>
               <hgroup id={id}>
                   {heading}
               </hgroup>
               {children}
           </header>;
};

export default Header;
