import { useRef, useEffect } from "react";
import { A, Card, H1, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { Assistive } from "../../../features/util";
import { prevLocation } from "../listeners.js";
import { layout, skipLink } from "./page.module.css";

export const PageLayout = ({
    children,
    heading,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) => {
    const ref = useRef();
    useEffect(() => {
        if (!prevLocation()) {
            return;
        }

        ref.current.focus({
            preventScroll: true,
            focusVisible: true
        });
    }, []);
    return <div className={layout}>
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
                               <Hgroup>
                                   <H1 tabIndex="-1" id="content">{heading}</H1>
                                   {subheading}
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
