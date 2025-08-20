import type { ReactNode, Ref } from "react";
import { useId } from "react";
import { BlockA, ClickTrap } from "@/ui";
import styles from "./desc.module.css";

interface Props {
    children?: ReactNode;
    desc?: ReactNode;
    ref?: Ref<HTMLAnchorElement>;
}

const DescA = ({ children, desc, ref, ...props }: Readonly<Props>) => {
    const id = useId();

    return <div role="presentation" className={styles.wrapper}>
               <BlockA aria-describedby={id} {...props} ref={ref}>
                   {children}
                   <ClickTrap />
               </BlockA>
               &emsp;
               <span id={id}>
                   {desc}
               </span>
           </div>;
};

export default DescA;