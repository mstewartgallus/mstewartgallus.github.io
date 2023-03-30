import { H1, P, Viewport } from "../../features/ui";
import { Page } from "./page";

export const Loading = () =>
<Viewport>
    <Page heading={<H1>Loading...</H1>}>
        <P>Loading...</P>
    </Page>
</Viewport>;

export default Loading;
