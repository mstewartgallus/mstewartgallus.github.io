import { Card, H1, Header, Hgroup, Theme } from "@features/ui";
import { RootScroller } from "@features/root-scroller";
import { Page } from "../page";
import { StandardLayout } from "../standard-layout";
import { SkipA } from "../skip-a";

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
                                <H1>
                                    <SkipA id="content" href="#content">{heading}</SkipA>
                                </H1>
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
</Theme>;
