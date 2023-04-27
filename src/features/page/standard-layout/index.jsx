import { ScreenOnly } from "@features/util";
import { Card, Column, H2, Nav, SubtleA } from "@features/ui";
import { SupportLayout } from "../support-layout";
import { skip } from "./layout.module.css";

const Skip = ({children}) =>
<nav aria-label="Skip" className={skip}>
    <Card>
        {children}
    </Card>
</nav>;

export const StandardLayout = ({
    children,
    support,
    navigation,
    breadcrumbs,
    menubar
}) =>
<Column>
    <ScreenOnly>
        <Skip>
            {menubar}
        </Skip>
    </ScreenOnly>
    <SupportLayout
        support={
            <>
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
            </>
        }>
        <Column>
            {children}
        </Column>
    </SupportLayout>
</Column>;
