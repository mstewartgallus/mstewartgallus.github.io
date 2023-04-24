import { ScreenOnly } from "@features/util";
import { A, Card, Column, H1, H2, Hgroup, Nav, Theme } from "@features/ui";
import { Page } from "../page";
import { SidebarLayout } from "../sidebar-layout";
import { SkipA } from "../skip-a";
import { footer as footerClass } from "./page.module.css";

export const ViewportPage = ({
    children,
    heading,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<Theme>
    <Page>
        <Column>
            <SidebarLayout
                sidebar={
                    <>
                        {sidebar}
                        <ScreenOnly>
                            <Nav heading={<H2>Breadcrumbs</H2>}>
                                {breadcrumbs}
                            </Nav>
                        </ScreenOnly>
                    </>
                }
            >
                <main data-pagefind-body="" aria-describedby="content">
                    <Card>
                        <header>
                            <Hgroup>
                                <H1>
                                    <SkipA id="content" href="#content">{heading}</SkipA>
                                </H1>
                                {subheading}
                            </Hgroup>
                            {notice}
                        </header>
                        {children}
                    </Card>
                </main>
                {mainbar}
            </SidebarLayout>
            <div className={footerClass}>
                <Card>
                    <A href="#content">Back to Top</A>
                </Card>
            </div>
        </Column>
    </Page>
</Theme>;
