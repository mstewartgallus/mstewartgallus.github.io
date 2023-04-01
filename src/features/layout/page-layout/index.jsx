import { useRef } from "react";
import { Card, H1, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { layout } from "./page.module.css";

export const PageLayout = ({
    children,
    heading,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) => {
    const content = useRef();
    return <div className={layout}>
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
                                   <H1 ref={content} tabIndex="-1" id="content">{heading}</H1>
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
