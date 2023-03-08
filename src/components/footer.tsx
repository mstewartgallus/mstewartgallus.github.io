import type { FC, ReactNode } from "react";
import { useId } from "react";

export interface FooterProps {
    children?: ReactNode;
    heading?: ReactNode;
}

export const Footer: FC<FooterProps> = ({children, heading}) => {
    const id = useId();
    return <footer aria-labelledby={id}>
               <hgroup className="sr-only" id={id}>
                   {heading}
               </hgroup>
               {children}
           </footer>;
};

export default Footer;
