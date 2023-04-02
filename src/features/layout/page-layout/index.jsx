import { Card, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { H1 } from "../h1.jsx";
import { SkipA } from "../skip-a";
import { layout } from "./page.module.css";

export const PageLayout = ({
    children,
    heading,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<div className={layout}>
    <SkipA aria-describedby="content" href="#content">Skip to Content</SkipA>
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
            <main data-pagefind-body="" aria-describedby="content">
                <header>
                    <Hgroup>
                        <H1>{heading}</H1>
                        {subheading}
                    </Hgroup>
                    {notice}
                </header>
                {children}
            </main>
        </Card>
        {mainbar}
    </SidebarLayout>
</div>;

export default PageLayout;
