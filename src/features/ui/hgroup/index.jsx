import { hgroup } from "./hgroup.module.css";

export const Hgroup = ({children, ...props}) =>
<hgroup className={hgroup} {...props}>
    {children}
</hgroup>;

export default Hgroup;
