import { legend, inner } from "./legend.module.css";

export const Legend = ({ children }) =>
<>
    <legend className={legend}>
        {children}
    </legend>
    <div className={inner} aria-hidden="true">
        {children}
    </div>
</>
;
