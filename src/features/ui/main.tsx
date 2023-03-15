import { useId } from "react";
import type { FC, ReactNode, HTMLAttributes } from "react";

export interface MainProps extends HTMLAttributes<HTMLElement> {
    heading?: ReactNode;
    notice?: ReactNode;
}

export const Main: FC<MainProps> = ({children, heading, notice, ...props}) => {
    const id = useId();
    return <main data-pagefind-body="" aria-describedby={id} {...props}>
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
