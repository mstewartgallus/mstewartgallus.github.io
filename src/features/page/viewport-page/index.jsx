import { ScreenOnly } from "@features/util";
import { Card, H1, H2, Hgroup, Nav } from "@features/ui";
import { Page } from "../page";
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
<Page
    sidebar={
        <>
            {sidebar}
            <ScreenOnly>
                <Nav heading={<H2 tabIndex="-1" id="breadcrumbs">Breadcrumbs</H2>}>
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
                    <H1 tabIndex="-1" id="content">
                        <SkipA href="#content">{heading}</SkipA>
                    </H1>
                    {subheading}
                </Hgroup>
                {notice}
            </header>
            {children}
        </Card>
    </main>
    {mainbar}
</Page>;
