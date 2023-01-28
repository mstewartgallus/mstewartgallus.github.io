import * as React from "react";
import HeadBasic from "../components/head-basic.jsx";
import { Link } from "gatsby";
import Main from "../components/main.jsx";
import Page from "../components/page.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";

export const Head = () => <>
  <HeadBasic/>
  <Title>Not found</Title>
</>;

const NotFoundPage = () =>
<Page>
    <Main title="Page not found">
        <p>
            Sorry we couldn’t find what you were looking for.
            <br />
            <Link to="/">Go home</Link>.
        </p>
    </Main>
    <Sidebar>
    </Sidebar>
</Page>;

export default NotFoundPage;
