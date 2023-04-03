import { Ul, Li, A, Card, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { H1 } from "../h1.jsx";
import { SkipA } from "../skip-a";
import { layout, tableOfContents as tableOfContentsClass } from "./page.module.css";

const DefaultTableOfContents = () =>
<Ul>
    <Li>
        <SkipA aria-describedby="content" href="#content">Skip to Content</SkipA>
    </Li>
    <Li>
        <A href="#breadcrumbs">Breadcrumbs</A>
    </Li>
</Ul>;

export const PageLayout = ({
    children,
    tableOfContents = <DefaultTableOfContents />,
    heading,
    subheading,
    notice,
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
                            <Nav heading={<H2 tabIndex="-1"
                                              id="breadcrumbs">Breadcrumbs</H2>}>
                                {breadcrumbs}
                            </Nav>
                        </Card>
                }
            </>
        }
    >
        <div className={tableOfContentsClass}>
            <Card>
                <nav aria-labelledby="table-of-contents">
                    <header>
                        <Hgroup>
                            <H2 tabIndex="-1" id="table-of-contents"
                                aria-describedby="content">Table of Contents</H2>
                        </Hgroup>
                    </header>
                    {tableOfContents}
                </nav>
            </Card>
        </div>
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
    <Card>
        <A href="#table-of-contents">Table of Contents</A>
    </Card>
</div>;

export default PageLayout;
