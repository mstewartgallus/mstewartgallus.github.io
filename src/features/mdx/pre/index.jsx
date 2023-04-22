import { useId, useRef } from "react"
import { SubtleA } from "@features/ui";
import { figure, figcaption, pre } from "./pre.module.css";

export const Pre = ({children, id, title}) =>
<figure id={id} className={figure}>
    <figcaption className={figcaption}>
        <SubtleA href={`#${id}`}>{title}</SubtleA>
    </figcaption>
    <pre className={pre}>
        {children}
    </pre>
</figure>;
