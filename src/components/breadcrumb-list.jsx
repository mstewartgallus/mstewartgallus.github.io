import * as React from "react";
import { breadcrumb } from "./breadcrumb-list.module.css";

export const BreadcrumbList = ({children}) =>
<ol className={breadcrumb}>{children}</ol>;

export default BreadcrumbList;
