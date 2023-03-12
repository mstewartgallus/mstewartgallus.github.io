import { A } from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
import Page from "../components/page";
import Title from "../components/title.jsx";

export const Head = () => <>
                              <HeadBasic/>
                              <Title>Not found</Title>
                          </>;

const NotFoundPage = () =>
<Page heading={<h1 tabIndex="-1">Not Found</h1>}>
    <p>
        Sorry we couldn’t find what you were looking for.
        <br />
        <A href="/">Go home</A>.
    </p>
</Page>;

export default NotFoundPage;
