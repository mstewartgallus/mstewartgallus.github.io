import { page, mainbar as mainbarClass, sidebar as sidebarClass } from "./page.module.css";

export const Page = ({children, sidebar}) =>
<div className={page}>
    <div className={mainbarClass}>
        {children}
    </div>
    <div className={sidebarClass}>
        {sidebar}
    </div>
</div>;

export default Page;
