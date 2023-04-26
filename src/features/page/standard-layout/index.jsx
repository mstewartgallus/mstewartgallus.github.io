import { useId } from "react";
import { ScreenOnly } from "@features/util";
import { A, Card, Column, H2, Nav, Menubar, MenuA, SubtleA } from "@features/ui";
import { SupportLayout } from "../support-layout";
import { skip } from "./layout.module.css";

const Skip = ({children}) =>
<nav aria-label="Skip" className={skip}>
    <Menubar>
        {children}
    </Menubar>
</nav>;


const DefaultSkip = () =>
<>
    <MenuA href="#content" aria-describedby="content">Content</MenuA>
    <MenuA href="#breadcrumbs">Breadcrumbs</MenuA>
</>;

export const StandardLayout = ({
    children,
    support,
    navigation,
    breadcrumbs,
    menubar = <DefaultSkip />
}) =>
<>
    <ScreenOnly>
        <Skip>
            {menubar}
        </Skip>
    </ScreenOnly>
    <SupportLayout support={<>
                                {support}
                                {navigation}
                                <ScreenOnly>
                                    <Nav heading={
                                             <H2>
                                                 <SubtleA id="breadcrumbs" href="#breadcrumbs">
                                                     Breadcrumbs
                                                 </SubtleA>
                                             </H2>}>
                                        {breadcrumbs}
                                    </Nav>
                                </ScreenOnly>
                            </>}>
        {children}
    </SupportLayout>
</>;
