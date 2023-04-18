import {
    page,
    mainbar as mainbarClass,
    sidebar as sidebarClass
} from "./sidebar-layout.module.css";

export const SidebarLayout = ({children, sidebar}) =>
<div className={page}>
    <div className={mainbarClass}>
        {children}
    </div>
    <div className={sidebarClass}>
        {sidebar}
    </div>
</div>;
