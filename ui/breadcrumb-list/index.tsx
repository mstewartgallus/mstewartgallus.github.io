import type { JSX } from "react";
import BlockA from "../BlockA";
import ClickTrap from "../ClickTrap";
import BreadcrumbItem from "./BreadcrumbItem";

export { default as BreadcrumbList } from "./BreadcrumbList";
export { default as BreadcrumbItem } from "./BreadcrumbItem";

export const BreadcrumbA = (props: JSX.IntrinsicElements['a']) =>
<BreadcrumbItem>
    <BlockA {...props}>
        {props.children}
        <ClickTrap />
    </BlockA>
</BreadcrumbItem>;
