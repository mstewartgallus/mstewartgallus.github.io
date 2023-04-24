import { Column, Row } from "@features/ui";
import { mainbar as mainbarClass, sidebar as sidebarClass } from "./page.module.css";

export const SidebarLayout = ({ children, sidebar }) =>
<Row>
    <div className={mainbarClass}>
        <Column>
            {children}
        </Column>
    </div>
    <div className={sidebarClass}>
        <Column>
            {sidebar}
        </Column>
    </div>
</Row>;
