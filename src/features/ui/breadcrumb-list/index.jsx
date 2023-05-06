import { withClass } from "@features/util";
import { BlockA } from "../block-a";
import { ClickTrap } from "../click-trap";
import { breadcrumblist, breadcrumb } from "./breadcrumb-list.module.css";

export const BreadcrumbList = withClass('ol', breadcrumblist);
export const BreadcrumbItem = withClass('li', breadcrumb);

export const BreadcrumbA = props =>
<BreadcrumbItem>
    <BlockA {...props}>
        {props.children}
        <ClickTrap />
    </BlockA>
</BreadcrumbItem>;
