import { A, Card, Column, Row } from "@features/ui";
import {
    inlineLayout, layout, header as headerClass, footer,
    mainbar as mainbarClass, sidebar as sidebarClass
} from "./page.module.css";

export const Page = ({
    children,
    header,
    sidebar
}) =>
<div className={layout}>
    <Column>
        <header className={headerClass}>
            {header}
        </header>
        <div className={inlineLayout}>
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
                        <A href="#top">Back to Top</A>
                    </Card>
                </div>
            </Column>
        </div>
    </Column>
</div>;
