import type { ReactNode } from "react";
// import { Announce } from "@/features/announce";
import { Card, Header, Hgroup } from "@/ui";
// import { useLocationContext } from "@/features/location";
// import { RootScroller } from "@/features/root-scroller";
import { StandardLayout } from "../standard-layout";
import { SkipH1 } from "../skip-h1";

// const AnnounceHeading = ({children}) => {
//     // const { location, prevLocation } = useLocationContext();
//     return location !== prevLocation && <Announce>Navigated to {children}</Announce>;
// };

interface Props {
    children?: ReactNode;
    heading?: ReactNode;
    subheading?: ReactNode;
    notice?: ReactNode;
    mainbar?: ReactNode;
    support?: ReactNode;
    navigation?: ReactNode;
    breadcrumbs?: ReactNode;
}

export const ViewportPage = ({
    children,
    heading,
    subheading,
    notice,
    mainbar,
    support,
    navigation,
    breadcrumbs
}: Readonly<Props>) =>
<StandardLayout
    support={support}
    navigation={navigation}
    breadcrumbs={breadcrumbs}
>
    <main data-pagefind-body="" aria-describedby="content">
        <Card>
            <Header>
                <Hgroup>
                    <SkipH1 id="content">{heading}</SkipH1>
                    {subheading}
                </Hgroup>
                {notice}
            </Header>
            {children}
        </Card>
    </main>
    {mainbar}
</StandardLayout>;
