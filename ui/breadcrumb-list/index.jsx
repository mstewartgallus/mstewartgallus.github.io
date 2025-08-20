import BlockA from "../BlockA";
import ClickTrap from "../ClickTrap";
import BreadcrumbItem from "./BreadcrumbItem";

export { default as BreadcrumbList } from "./BreadcrumbList";
export { default as BreadcrumbItem } from "./BreadcrumbItem";

export const BreadcrumbA = props =>
<BreadcrumbItem>
    <BlockA {...props}>
        {props.children}
        <ClickTrap />
    </BlockA>
</BreadcrumbItem>;
