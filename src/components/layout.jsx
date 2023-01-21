import * as React from "react";
import { layout } from "./layout.module.css";

export const Layout = ({ children }) => {
    return <div className={layout}>{children}</div>;
};

export default Layout;
