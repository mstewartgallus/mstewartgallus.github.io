import { legend, inner } from "./legend.module.css";

export const Legend = ({ children, ...props }) =>
<legend className={legend} {...props}>
    <div className={inner}>
        {children}
    </div>
</legend>;
