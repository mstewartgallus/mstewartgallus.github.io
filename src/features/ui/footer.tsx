import type { FC, ReactNode, HTMLAttributes } from "react";
import { useId } from "react";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
    heading?: ReactNode;
}

export const Footer: FC<FooterProps> = ({children, heading, ...props}) => {
    const id = useId();
    return <footer aria-labelledby={id} {...props}>
               <hgroup className="sr-only" id={id}>
                   {heading}
               </hgroup>
               {children}
           </footer>;
};

export default Footer;
