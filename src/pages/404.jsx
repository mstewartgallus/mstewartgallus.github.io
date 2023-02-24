import * as React from "react";
import A from "../components/a.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Title from "../components/title.jsx";

export const Head = () => <>
                              <HeadBasic/>
                              <Title>Not found</Title>
                          </>;

const Heading = () => <h1 tabIndex="-1">Not Found</h1>;

const NotFoundPage = () =>
<p>
    Sorry we couldn’t find what you were looking for.
    <br />
    <A href="/">Go home</A>.
</p>;

NotFoundPage.Heading = Heading;

export default NotFoundPage;
