import { A, BreadcrumbList, BreadcrumbItem, Main, Nav, Page } from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
import Title from "../components/title.jsx";

const Sidebar = () =>
<Nav heading={<h2>Breadcrumbs</h2>}>
    <BreadcrumbList>
        <BreadcrumbItem><A href="/">Home</A></BreadcrumbItem>
        <BreadcrumbItem>
            <A role="link" aria-disabled="true" aria-current="page">Not Found</A>
        </BreadcrumbItem>
    </BreadcrumbList>
</Nav>;

export const Head = () => <>
                              <HeadBasic/>
                              <Title>Not Found</Title>
                          </>;

const NotFoundPage = () =>
<Page sidebar={<Sidebar />}>
    <Main heading={<h1>Not Found</h1>}>
        <p>Sorry we couldn’t find what you were looking for.</p>
    </Main>
</Page>;

export default NotFoundPage;
