import * as React from "react";
import A from "../components/a.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Post from "../components/post.jsx";
import Title from "../components/title.jsx";

export const Head = () => <>
  <HeadBasic/>
  <Title>Not found</Title>
</>;

const NotFoundPage = () =>
<Post title="Page not found">
    <p>
        Sorry we couldn’t find what you were looking for.
        <br />
        <A href="/">Go home</A>.
    </p>
</Post>;

export default NotFoundPage;
