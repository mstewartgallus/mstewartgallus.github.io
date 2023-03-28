import { Card } from "../card";
import { H2 } from "../heading";
import { Main } from "../main";
import { Nav } from "../nav.jsx";
import { SidebarLayout } from "../sidebar-layout";
import { Theme } from "../theme";
import { Viewport } from "../viewport";
import { layout } from "./page.module.css";

export const Page = ({
    children,
    heading, notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<Theme>
    <Viewport>
        <div className={layout}>
            <SidebarLayout
                sidebar={
                    <>
                        {sidebar}
                        <Card>
                            <Nav heading={<H2>Breadcrumbs</H2>}>
                                {breadcrumbs}
                            </Nav>
                        </Card>
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
    </Viewport>
</Theme>;

export default Page;
