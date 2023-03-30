import { Card, H2, Main, Nav, SidebarLayout, Viewport } from "../../../features/ui";
import { layout } from "./page.module.css";

export const PageLayout = ({
    children,
    heading, notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<Viewport>
    <div className={layout}>
        <SidebarLayout
            sidebar={
                <>
                    {sidebar}
                    {
                        breadcrumbs &&
                            <Card>
                                <Nav heading={<H2>Breadcrumbs</H2>}>
                                    {breadcrumbs}
                                </Nav>
                            </Card>
                    }
                </>
            }
        >
            <Card>
                <Main heading={heading}
                      notice={notice}>
                    {children}
                </Main>
            </Card>
            {mainbar}
        </SidebarLayout>
    </div>
</Viewport>;

export default PageLayout;
