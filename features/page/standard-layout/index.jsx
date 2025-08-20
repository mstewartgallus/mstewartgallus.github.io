import { ScreenOnly } from "@/features/util";
import { Column, H2A, Nav } from "@/features/ui";
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
            <ScreenOnly>
                {navigation}
                <Nav heading={
                         <H2A id="breadcrumbs">
                             Breadcrumbs
                         </H2A>}>
                    {breadcrumbs}
                </Nav>
            </ScreenOnly>
        </>
    }>
    <Column>
        {children}
    </Column>
</SupportLayout>;
