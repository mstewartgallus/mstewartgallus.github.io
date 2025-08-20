import type { ReactNode } from "react";
import { ScreenOnly } from "@/features/util";
import { Column, H2A, Nav } from "@/ui";
import { SupportLayout } from "../support-layout";

interface Props {
    children?: ReactNode;
    support?: ReactNode;
    navigation?: ReactNode;
    breadcrumbs?: ReactNode;
}

export const StandardLayout = ({
    children,
    support,
    navigation,
    breadcrumbs
}: Props) =>
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
