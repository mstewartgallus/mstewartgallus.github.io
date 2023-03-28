import { theme } from "./theme.module.css";

export const Theme = ({children}) =>
<div className={theme}>
    {children}
</div>;

export default Theme;
