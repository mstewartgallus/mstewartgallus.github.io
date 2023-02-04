import * as React from "react";
import BreadcrumbList from "./breadcrumb-list.jsx";
import Nav from "./nav.jsx";

export const Breadcrumbs = ({children}) =>
<Nav title="Breadcrumbs">
    <BreadcrumbList>{children}</BreadcrumbList>
</Nav>;

export default Breadcrumbs;
