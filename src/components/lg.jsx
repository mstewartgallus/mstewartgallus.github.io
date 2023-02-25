import { lg } from "./lg.module.css";

export const Lg = ({ children, ...props }) =>
<p {...props} className={lg}>{children}</p>;

export default Lg;
