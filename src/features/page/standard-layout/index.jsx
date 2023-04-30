import { ScreenOnly } from "@features/util";
import { Column, H2, Nav, SubtleA } from "@features/ui";
import { SupportLayout } from "../support-layout";

export const StandardLayout = ({
    children,
    support,
    navigation,
    breadcrumbs
}) =>
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
</SupportLayout>;
