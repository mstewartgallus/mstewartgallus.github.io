import { useCallback, useRef } from "react";
import { ScreenOnly } from "@features/util";
import { Button, Theme, A, Card, H2, Hgroup, Nav, SidebarLayout } from "@features/ui";
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
}) => {
    const top = useRef();
    const scrollToTop = useCallback(() => {
        top.current.scrollIntoView();
    }, []);
    return <Viewport>
        <div ref={top} />
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
                    <Button type="button" onClick={scrollToTop}>Back to Top</Button>
                </div>
            </View>
        </Theme>
    </Viewport>;
};

export default ViewportPage;
