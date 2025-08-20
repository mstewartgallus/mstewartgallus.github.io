import BlockA from "../block-a";
import ClickTrap from "../click-trap";
import { BreadcrumbItem } from "./breadcrumb-item";

export { BreadcrumbList } from "./breadcrumb-list";
export { BreadcrumbItem } from "./breadcrumb-item";

export const BreadcrumbA = props =>
<BreadcrumbItem>
    <BlockA {...props}>
        {props.children}
        <ClickTrap />
    </BlockA>
</BreadcrumbItem>;
