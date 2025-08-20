import { Column } from "@/features/ui";
import { SidebarLayout } from "../sidebar-layout";

export const SupportLayout = ({
    children,
    support
}) =>
<SidebarLayout
    sidebar={
        <Column>
            {support}
        </Column>
    }
>
    {children}
</SidebarLayout>;
