import * as React from "react";
import { sidebar } from "./sidebar.module.css";

export const Sidebar = ({ children }) =>
<div className={sidebar}>
    {children}
</div>;

export default Sidebar;
