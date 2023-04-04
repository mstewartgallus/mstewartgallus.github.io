import { P, Ul, Li, A } from "../../features/ui";
import { PageLayout } from "./page-layout";
import { SkipA } from "./skip-a";

export const Loading = () =>
<PageLayout
    heading={<>Loading&hellip;</>}
    tableOfContents={
        <>
            <SkipA href="#content">{<>Loading&hellip;</>}</SkipA>
            <Ul>
                <Li>
                    <A href="#breadcrumbs">Breadcrumbs</A>
                </Li>
            </Ul>
        </>
    }
>
    <P>Loading&hellip;</P>
</PageLayout>;

export default Loading;
