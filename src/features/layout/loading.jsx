import { Card, H1, Main, Page } from "../../features/ui";

export const Loading = () =>
<Page>
    <Card>
        <Main heading={<H1>Loading...</H1>}>
            <p>Loading...</p>
        </Main>
    </Card>
</Page>;

export default Loading;
