import { useId } from "react";
import Card from "./Card";

import type { JSX, ReactNode } from "react";

type Props = JSX.IntrinsicElements["footer"] & {
    heading?: ReactNode;
};

const Footer = ({children, heading, ...props}: Readonly<Props>) => {
    const id = useId();
    return <footer aria-labelledby={id} {...props}>
               <Card>
                   <hgroup id={id}>
                       {heading}
                   </hgroup>
                   {children}
               </Card>
           </footer>;
};
export default Footer;
