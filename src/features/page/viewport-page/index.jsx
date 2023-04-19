import { useCallback, useRef } from "react";
import { useClient, ScreenOnly } from "@features/util";
import { Button, Theme, Card, H2, Hgroup, Nav } from "@features/ui";
import { H1 } from "../h1.jsx";
import {
    layout, header, footer,
    page, mainbar as mainbarClass, sidebar as sidebarClass,
    hide
} from "./page.module.css";

export const ViewportPage = ({
    children,
    heading,
    skipA,
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
    const client = useClient();
    return <>
               <div ref={top} />
               <Theme>
                   <div className={layout}>
                       <div className={header}>
                           <Card>
                               {skipA}
                           </Card>
                       </div>
                       <div className={page}>
                           <div className={mainbarClass}>
                               <main data-pagefind-body="" aria-describedby="content">
                                   <Card>
                                       <header>
                                           <Hgroup>
                                               <H1>{heading}</H1>
                                               {subheading}
                                           </Hgroup>
                                           {notice}
                                       </header>
                                       {children}
                                   </Card>
                               </main>
                               {mainbar}
                           </div>
                           <div className={sidebarClass}>
                               {sidebar}
                               <ScreenOnly>
                                   <Nav heading={<H2 tabIndex="-1" id="breadcrumbs">Breadcrumbs</H2>}>
                                       {breadcrumbs}
                                   </Nav>
                               </ScreenOnly>
                           </div>
                       </div>
                       <div className={client ? footer : hide} inert={client ? null : "inert"}>
                           <Card>
                               <Button type="button" onClick={scrollToTop}>Back to Top</Button>
                           </Card>
                       </div>
                   </div>
               </Theme>
           </>;
};
