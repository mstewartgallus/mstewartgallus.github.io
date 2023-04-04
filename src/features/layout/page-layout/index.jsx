import { Assistive, useUnder } from "../../../features/util";
import { Theme, A, Card, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { H1 } from "../h1.jsx";
import { layout, tableOfContents as tableOfContentsClass } from "./page.module.css";

const TableHeading = ({children, id, ...props}) => {
    const under = useUnder();
    if (under) {
        id = null;
    }
    return <span id={id} {...props}>{children}</span>;
};

export const PageLayout = ({
    children,
    heading,
    tableOfContents,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<Theme>
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
                    <Card>
                        <A href="#table-of-contents">Table of Contents</A>
                    </Card>
                </>
            }
        >
            <Card className={tableOfContentsClass}>
                <nav aria-labelledby="table-of-contents">
                    <header>
                        <Assistive>
                            <TableHeading
                                tabIndex="-1" id="table-of-contents"
                                aria-describedby="content">Outline</TableHeading>
                        </Assistive>
                    </header>
                    {tableOfContents}
                </nav>
            </Card>
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
    </div>
</Theme>;

export default PageLayout;
