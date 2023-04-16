import { ScreenOnly } from "@features/util";
import { Theme, A, Card, H2, Hgroup, Nav, SidebarLayout } from "@features/ui";
import { H1 } from "../h1.jsx";
import { Viewport } from "../viewport";
import { layout, header, footer } from "./page.module.css";

const View = ({children}) => <div className={layout}>{children}</div>;

const Sidebar = ({children, breadcrumbs}) =>
      <>
          {children}
          <ScreenOnly>
              <Card>
                  <Nav heading={<H2 tabIndex="-1" id="breadcrumbs">Breadcrumbs</H2>}>
                      {breadcrumbs}
                  </Nav>
              </Card>
          </ScreenOnly>
      </>;

export const ViewportPage = ({
    children,
    heading,
    tableOfContents,
    skipA = tableOfContents,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<Viewport>
    <Theme>
        <View>
            <div className={header}>
                {skipA}
            </div>
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
            <div className={footer}>
                <A href="#top">Back to Top</A>
            </div>
        </View>
    </Theme>
</Viewport>;


export default ViewportPage;
