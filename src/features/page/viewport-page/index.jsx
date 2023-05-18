import { Announce } from "@features/announce";
import { Card, Header, Hgroup, Theme } from "@features/ui";
import { RootScroller } from "@features/root-scroller";
import { Page } from "../page";
import { StandardLayout } from "../standard-layout";
import { SkipH1 } from "../skip-h1";

export const ViewportPage = ({
    children,
    heading,
    subheading,
    notice,
    mainbar,
    support,
    navigation,
    breadcrumbs
}) =>
<>
    <Announce>Navigated to {heading}</Announce>
    <Theme>
        <RootScroller>
            <Page>
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
                </StandardLayout>
            </Page>
        </RootScroller>
    </Theme>
</>;
