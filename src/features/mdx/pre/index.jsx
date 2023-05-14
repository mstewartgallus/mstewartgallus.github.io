import { withA } from "@features/ui";
import { figure, figcaption, pre } from "./pre.module.css";

const Figcaption = withA('figcaption');

export const Pre = ({children, id, title}) =>
<figure className={figure}>
    <Figcaption className={figcaption} id={id}>
        {title}
    </Figcaption>
    <pre className={pre}>
        {children}
    </pre>
</figure>;
