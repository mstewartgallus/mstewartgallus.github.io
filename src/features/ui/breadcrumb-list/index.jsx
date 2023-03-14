import { breadcrumblist, breadcrumb } from "./breadcrumb-list.module.css";

export const BreadcrumbList = ({children, ...props}) =>
<ol {...props} className={breadcrumblist}>{children}</ol>;

export const BreadcrumbItem = ({children, ...props}) =>
<li {...props} className={breadcrumb}>{children}</li>;
