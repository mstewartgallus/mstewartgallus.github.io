import { Card, H1, Main, Page, Viewport } from "../../features/ui";

export const Loading = () =>
<Viewport>
    <Page heading={<H1>Loading...</H1>}>
        <p>Loading...</p>
    </Page>
</Viewport>;

export default Loading;
