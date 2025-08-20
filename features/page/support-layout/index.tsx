import type { ReactNode } from "react";
import { Column } from "@/ui";
import { SidebarLayout } from "../sidebar-layout";

interface Props {
    children: ReactNode;
    support: ReactNode;
}

export const SupportLayout = ({
    children,
    support
}: Readonly<Props>) =>
<SidebarLayout
    sidebar={
        <Column>
            {support}
        </Column>
    }
>
    {children}
</SidebarLayout>;
