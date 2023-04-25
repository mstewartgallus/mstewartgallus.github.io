import { ScreenOnly } from "@features/util";
import { Card, Column, H1, H2, Hgroup, Nav, Theme } from "@features/ui";
import { Page } from "../page";
import { SidebarLayout } from "../sidebar-layout";
import { SkipA } from "../skip-a";

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
        <SidebarLayout
            sidebar={
                <Column>
                    {sidebar}
                    <ScreenOnly>
                        <Nav heading={<H2>Breadcrumbs</H2>}>
                            {breadcrumbs}
                        </Nav>
                    </ScreenOnly>
                </Column>
            }
        >
            <Column>
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
            </Column>
        </SidebarLayout>
    </Page>
</Theme>;
