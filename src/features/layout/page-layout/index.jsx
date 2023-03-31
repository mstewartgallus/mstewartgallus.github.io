import { useEffect, useRef } from "react";
import { A, Card, H2, Hgroup, Nav, SidebarLayout, Viewport } from "../../../features/ui";
import { Assistive, usePrevLocation } from "../../../features/util";
import { layout, skipLink } from "./page.module.css";

export const PageLayout = ({
    children,
    heading, notice,
    mainbar,
    sidebar,
    breadcrumbs
}) => {
    const prevLocation = usePrevLocation();
    const ref = useRef();
    useEffect(() => {
        const { current: skip } = ref;
        if (!skip) {
            return;
        }
        if (!prevLocation) {
            return;
        }

        skip.focus({ preventScroll: true, focusVisible: true });
    }, []);
    return <Viewport>
               <div className={layout}>
                   <Assistive>
                       <A className={skipLink} ref={ref} href="#content"
                          aria-describedby="content">Skip to content</A>
                   </Assistive>
                   <SidebarLayout
                       sidebar={
                           <>
                               {sidebar}
                               {
                                   breadcrumbs &&
                                       <Card>
                                           <Nav heading={<H2>Breadcrumbs</H2>}>
                                               {breadcrumbs}
                                           </Nav>
                                       </Card>
                               }
                           </>
                       }
                   >
                       <Card>
                           <main data-pagefind-body="" aria-describedby="content">
                               <header>
                                   <Hgroup id="content">
                                       {heading}
                                   </Hgroup>
                                   {notice}
                               </header>
                               {children}
                           </main>
                       </Card>
                       {mainbar}
                   </SidebarLayout>
               </div>
           </Viewport>;
};

export default PageLayout;
