import { useId } from "react";
import Card from "./Card";
import Hgroup from "./Hgroup";

import type { JSX, ReactNode } from "react";

type Props = JSX.IntrinsicElements["footer"] & {
    heading?: ReactNode;
};

const Nav = ({children, heading, ...props}: Props) => {
    const id = useId();
    return <nav aria-labelledby={id} {...props}>
               <Card>
                   <header id={id}>
                       <Hgroup>
                           {heading}
                       </Hgroup>
                   </header>
                   {children}
               </Card>
           </nav>;
};

export default Nav;
