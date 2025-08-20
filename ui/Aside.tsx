import type { ReactNode, JSX } from "react";

import { useId } from "react";
import Card from "./Card";
import Hgroup from "./Hgroup";

type Props = JSX.IntrinsicElements["aside"] & {
    heading?: ReactNode;
};

const Aside = ({children, heading, ...props}: Readonly<Props>) => {
    const id = useId();
    return <aside aria-labelledby={id} {...props}>
               <Card>
                   <header id={id}>
                       <Hgroup>
                           {heading}
                       </Hgroup>
                   </header>
                   {children}
               </Card>
           </aside>;
};

export default Aside;
