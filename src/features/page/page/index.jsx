import { A, Card, Column, Row } from "@features/ui";
import {
    layout, header as headerClass, footer,
    mainbar as mainbarClass, sidebar as sidebarClass
} from "./page.module.css";

export const Page = ({
    children,
    sidebar
}) =>
<div className={layout}>
    <Column>
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
        </Row>
        <div className={footer}>
            <Card>
                <A href="#content">Back to Top</A>
            </Card>
        </div>
    </Column>
</div>;
