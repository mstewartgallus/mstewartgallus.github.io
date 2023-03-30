import { H1, P } from "../../features/ui";
import { PageLayout } from "./page-layout";

export const Loading = () =>
<PageLayout heading={<H1>Loading...</H1>}>
    <P>Loading...</P>
</PageLayout>;

export default Loading;
