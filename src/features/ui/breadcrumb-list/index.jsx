import { breadcrumblist, breadcrumb } from "./breadcrumb-list.module.css";

export const BreadcrumbList = ({children, ...props}) =>
<ol className={breadcrumblist} {...props}>{children}</ol>;

export const BreadcrumbItem = ({children, ...props}) =>
<li className={breadcrumb} {...props}>{children}</li>;
