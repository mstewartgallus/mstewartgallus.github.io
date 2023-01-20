import * as React from "react";
import { page } from "./page.module.css";

export const Page = ({ children }) => {
    return <div className={page}>{children}</div>;
};

export default Page;
