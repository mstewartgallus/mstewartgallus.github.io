import { withClass } from "@features/util";
import { breadcrumblist, breadcrumb } from "./breadcrumb-list.module.css";

export const BreadcrumbList = withClass('ol', breadcrumblist);
export const BreadcrumbItem = withClass('li', breadcrumb);
