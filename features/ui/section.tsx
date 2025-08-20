import { useId } from "react";
import Card from "./card";

import type { JSX, ReactNode } from "react";

type Props = JSX.IntrinsicElements["footer"] & {
    heading?: ReactNode;
};

const Section = ({children, heading, ...props}: Readonly<Props>) => {
    const id = useId();
    return <section aria-labelledby={id} {...props}>
               <Card>
                   <header id={id}>
                       <hgroup>
                           {heading}
                       </hgroup>
                   </header>
                   {children}
               </Card>
           </section>;
};

export default Section;
