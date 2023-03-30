import { Card } from "../card";
import { H2 } from "../heading";
import { Main } from "../main";
import { Nav } from "../nav.jsx";
import { SidebarLayout } from "../sidebar-layout";
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
