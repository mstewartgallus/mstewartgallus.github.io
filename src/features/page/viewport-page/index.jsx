import { ScreenOnly } from "@features/util";
import { A, Theme, Card, Column, Row, H2, Hgroup, Nav } from "@features/ui";
import { H1 } from "../h1.jsx";
import {
    layout, header, footer,
    mainbar as mainbarClass, sidebar as sidebarClass
} from "./page.module.css";

export const ViewportPage = ({
    children,
    heading,
    skipA,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<Theme>
    <div className={layout}>
        <Column>
            <div className={header}>
                <Card>
                    {skipA}
                </Card>
            </div>
            <Row>
                <div className={mainbarClass}>
                    <Column>
                        <main data-pagefind-body="" aria-describedby="content">
                            <Card>
                                <header>
                                    <Hgroup>
                                        <H1>{heading}</H1>
                                        {subheading}
                                    </Hgroup>
                                    {notice}
                                </header>
                                {children}
                            </Card>
                        </main>
                        {mainbar}
                    </Column>
                </div>
                <div className={sidebarClass}>
                    <Column>
                        {sidebar}
                        <ScreenOnly>
                            <Nav heading={<H2 tabIndex="-1" id="breadcrumbs">Breadcrumbs</H2>}>
                                {breadcrumbs}
                            </Nav>
                        </ScreenOnly>
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
</Theme>;
