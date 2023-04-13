import { breadcrumblist, breadcrumb } from "./breadcrumb-list.module.css";

export const BreadcrumbList = props =>
<ol className={breadcrumblist} {...props} />;

export const BreadcrumbItem = props =>
<li className={breadcrumb} {...props} />;
