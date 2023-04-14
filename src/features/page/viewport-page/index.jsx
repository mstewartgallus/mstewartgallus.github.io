import { Theme, A, Card, H2, Hgroup, Nav, SidebarLayout } from "@features/ui";
import { H1 } from "../h1.jsx";
import { layout } from "./page.module.css";

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
              <A href="#skip-link">Outline</A>
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
    {tableOfContents}
    <View>
        <SidebarLayout
            sidebar={<Sidebar breadcrumbs={breadcrumbs}>
                         {sidebar}
                     </Sidebar>}>
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
