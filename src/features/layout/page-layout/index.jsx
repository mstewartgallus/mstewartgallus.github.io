import { useRef, useEffect, useMemo } from "react";
import { A, Card, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { Assistive } from "../../../features/util";
import { usePrevLocation } from "../listeners.js";
import { layout, skipLink } from "./page.module.css";

const useFresh = () => {
    const prevLocation = usePrevLocation();
    const fresh = useMemo(() => !prevLocation, [prevLocation]);
    return fresh;
};

export const PageLayout = ({
    children,
    heading, notice,
    mainbar,
    sidebar,
    breadcrumbs
}) => {
    const skipLinkRef = useRef();
    const fresh = useFresh();
    useEffect(() => {
        if (fresh) {
            return;
        }
        skipLinkRef.current.focus({
            preventScroll: true,
            focusVisible: true
        });
    }, [fresh]);
    return <div className={layout}>
               <Assistive>
                   <A className={skipLink} ref={skipLinkRef} href="#content"
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
           </div>;
};

export default PageLayout;
