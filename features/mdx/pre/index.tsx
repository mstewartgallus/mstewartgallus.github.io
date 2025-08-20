import type { ReactNode, JSX } from "react";
import { withA } from "@/ui";
import styles from "./pre.module.css";

const Figcaption = withA<JSX.IntrinsicElements['figcaption']>('figcaption');

interface Props {
    children?: ReactNode;
    id?: string;
    title?: string;
}

const Pre = ({children, id, title}: Readonly<Props>) =>
<figure className={styles.figure}>
    <Figcaption className={styles.figcaption} id={id}>
        {title}
    </Figcaption>
    <pre className={styles.pre}>
        {children}
    </pre>
</figure>;

export default Pre;
