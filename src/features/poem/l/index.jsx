import { l } from "./l.module.css";

// FIXME rm last break
export const L = ({ children }) =>
<>
    <span role="presentation" className={l}>{children}</span>
    <br />
</>;
