import { SubtleA } from "@features/ui";
import { figure, figcaption, pre } from "./pre.module.css";

export const Pre = ({children, id, title}) =>
<figure className={figure}>
    <figcaption className={figcaption}>
        <SubtleA id={id} href={`#${id}`}>{title}</SubtleA>
    </figcaption>
    <pre className={pre}>
        {children}
    </pre>
</figure>;
