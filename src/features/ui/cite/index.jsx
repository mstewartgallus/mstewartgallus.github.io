import { cite as citeClass } from "./cite.module.css";

export const Cite = ({children, ...props}) =>
<cite className={citeClass} {...props}>
    {children}
</cite>;

export default Cite;
