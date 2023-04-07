import { P, Ul, Li, A } from "../../features/ui";
import { ViewportPage } from "./viewport-page";
import { SkipA } from "./skip-a";

const loading = <ViewportPage
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

export const LoadingPage = () => loading;

export default LoadingPage;
