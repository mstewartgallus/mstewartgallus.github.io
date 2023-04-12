import { Assistive } from "@features/util";
import { Theme, A, Card, H2, Hgroup, Nav, SidebarLayout } from "@features/ui";
import { H1 } from "../h1.jsx";
import { layout, tableOfContents as tableOfContentsClass } from "./page.module.css";

const TableHeading = ({children, id, ...props}) =><span id={id} {...props}>{children}</span>;

const View = ({children}) =>
<div className={layout}>{children}</div>;

const Sidebar = ({children, breadcrumbs}) =>
      <>
          {children}
          <Card>
              <Nav heading={<H2 id="breadcrumbs">Breadcrumbs</H2>}>
                  {breadcrumbs}
              </Nav>
          </Card>
          <Card>
              <A href="#table-of-contents">Table of Contents</A>
          </Card>
      </>;

export const ViewportPage = ({
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
    <View>
        <SidebarLayout
            sidebar={<Sidebar breadcrumbs={breadcrumbs}>
                         {sidebar}
                     </Sidebar>}>
            <div className={tableOfContentsClass}>
                <nav aria-labelledby="table-of-contents">
                    <Assistive>
                        <header>
                            <TableHeading
                                tabIndex="-1" id="table-of-contents"
                                aria-describedby="content">Outline</TableHeading>
                        </header>
                    </Assistive>
                    {tableOfContents}
                </nav>
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
    </View>
</Theme>;

export default ViewportPage;
