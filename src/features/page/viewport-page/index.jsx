import { Card, H1, Header, Hgroup, Menubar, MenuA } from "@features/ui";
import { Page } from "../page";
import { StandardLayout } from "../standard-layout";
import { SkipA } from "../skip-a";

const DefaultSkip = () =>
<Menubar heading="Skip">
    <MenuA href="#content" aria-describedby="content">Content</MenuA>
    <MenuA href="#breadcrumbs">Breadcrumbs</MenuA>
</Menubar>;

export const ViewportPage = ({
    children,
    heading,
    subheading,
    notice,
    menubar = <DefaultSkip />,
    mainbar,
    support,
    navigation,
    breadcrumbs
}) =>
<Page>
    <StandardLayout
        menubar={menubar}
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
</Page>;
