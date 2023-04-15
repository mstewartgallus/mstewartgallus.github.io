import { screen } from "./screen-only.module.css";

export const ScreenOnly = ({children}) =>
<div className={screen}>{children}</div>;

export default ScreenOnly;
