import { useRef } from "react";
import { Assistive } from "@features/util";
import { Theme, A, Card, H2, Hgroup, Nav, SidebarLayout, PopOverProvider } from "@features/ui";
import { H1 } from "../h1.jsx";
import { layout, tableOfContents as tableOfContentsClass } from "./page.module.css";

const TableHeading = ({children, id, ...props}) =><span id={id} {...props}>{children}</span>;

const View = ({children}) => <div className={layout}>{children}</div>;

const Sidebar = ({children, breadcrumbs}) =>
      <>
          {children}
          <Card>
              <Nav heading={<H2 tabIndex="-1" id="breadcrumbs">Breadcrumbs</H2>}>
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
}) => {
    const ref = useRef();
    return <Theme>
        <div ref={ref} />
        <View>
            <SidebarLayout
                sidebar={<Sidebar breadcrumbs={breadcrumbs}>
                             {sidebar}
                         </Sidebar>}>
                <Card>
                    <nav aria-labelledby="table-of-contents" className={tableOfContentsClass}>
                        <Assistive>
                            <header>
                                <TableHeading
                                    tabIndex="-1" id="table-of-contents"
                                    aria-describedby="content">Outline</TableHeading>
                            </header>
                        </Assistive>
                        <PopOverProvider value={ref}>
                            {tableOfContents}
                        </PopOverProvider>
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
        </View>
    </Theme>;
};

export default ViewportPage;
