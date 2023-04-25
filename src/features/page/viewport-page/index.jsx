import { Card, H1, Hgroup } from "@features/ui";
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
<Page>
    <StandardLayout
        support={support}
        navigation={navigation}
        breadcrumbs={breadcrumbs}
    >
        <main data-pagefind-body="" aria-describedby="content">
            <Card>
                <header>
                    <Hgroup>
                        <H1>
                            <SkipA id="content" href="#content">{heading}</SkipA>
                        </H1>
                        {subheading}
                    </Hgroup>
                    {notice}
                </header>
                {children}
            </Card>
        </main>
        {mainbar}
    </StandardLayout>
</Page>;
