import { P, Ul, Li, A } from "../../features/ui";
import { ViewportPage } from "./viewport-page";
import { SkipA } from "./skip-a";

export const LoadingPage = () =>
<ViewportPage
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
</ViewportPage>;

export default LoadingPage;
