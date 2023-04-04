import { Assistive } from "../../../features/util";
import { Theme, Ul, Li, A, Card, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { H1 } from "../h1.jsx";
import { SkipA } from "../skip-a";
import { layout, tableOfContents as tableOfContentsClass } from "./page.module.css";

const DefaultTableOfContents = ({heading}) =>
      <>
          <SkipA href="#content">{heading}</SkipA>
          <Ul>
              <Li>
                  <A href="#breadcrumbs">Breadcrumbs</A>
              </Li>
          </Ul>
      </>;

export const PageLayout = ({
    children,
    heading,
    tableOfContents = <DefaultTableOfContents heading={heading} />,
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
                            <span tabIndex="-1" id="table-of-contents"
                                  aria-describedby="content">Outline</span>
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
