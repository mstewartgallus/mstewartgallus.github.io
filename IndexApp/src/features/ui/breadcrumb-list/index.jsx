import { BlockA } from "../block-a";
import { ClickTrap } from "../click-trap";
import { BreadcrumbItem } from "./breadcrumb-item.jsx";

export { BreadcrumbList } from "./breadcrumb-list.jsx";
export { BreadcrumbItem } from "./breadcrumb-item.jsx";

export const BreadcrumbA = props =>
<BreadcrumbItem>
    <BlockA {...props}>
        {props.children}
        <ClickTrap />
    </BlockA>
</BreadcrumbItem>;
