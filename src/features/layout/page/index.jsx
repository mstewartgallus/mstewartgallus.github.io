import { Card, H2, Main, Nav, SidebarLayout } from "../../../features/ui";
import { layout } from "./page.module.css";

export const Page = ({
    children,
    heading, notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
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
</div>;

export default Page;
