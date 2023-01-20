import * as React from "react";
import { layout } from "./layout.module.css";
import "../styles/index.css";

export const Layout = ({ children }) => {
    return <div className={layout}>{children}</div>;
};

export default Layout;
