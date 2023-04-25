import { ScreenOnly } from "@features/util";
import { H2, Nav, Column } from "@features/ui";
import { SupportLayout } from "../support-layout";

export const StandardLayout = ({
    children,
    support,
    navigation,
    breadcrumbs
}) =>
<Column>
    <SupportLayout
        support={
            <>
                {navigation}
                {support}
            </>
        }>
        {children}
    </SupportLayout>
    <ScreenOnly>
        <Nav heading={<H2>Breadcrumbs</H2>}>
            {breadcrumbs}
        </Nav>
    </ScreenOnly>
</Column>;
