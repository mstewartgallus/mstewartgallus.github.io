import { layout, mainbar as mainbarClass, sidebar as sidebarClass } from "./sidebar.module.css";

export const SidebarLayout = ({ children, sidebar }) =>
<div className={layout}>
    <div className={mainbarClass}>
        {children}
    </div>
    <div className={sidebarClass}>
        {sidebar}
    </div>
</div>;
