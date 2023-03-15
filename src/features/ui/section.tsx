import { useId } from "react";
import type { FC, ReactNode, HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    heading?: ReactNode;
}

export const Section: FC<SectionProps> = ({children, heading, ...props}) => {
    const id = useId();
    return <section aria-labelledby={id} {...props}>
               <header id={id}>
                   <hgroup>
                       {heading}
                   </hgroup>
               </header>
               {children}
           </section>;
};

export default Section;
