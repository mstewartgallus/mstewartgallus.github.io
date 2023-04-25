import { ScreenOnly } from "@features/util";
import { H2, Nav } from "@features/ui";
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
            {navigation}
            {support}
            <ScreenOnly>
                <Nav heading={<H2>Breadcrumbs</H2>}>
                    {breadcrumbs}
                </Nav>
            </ScreenOnly>
        </>
    }>
    {children}
</SupportLayout>;
