import * as React from "react";
import HeadBasic from "../components/head-basic.jsx";
import { Link } from "gatsby";
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
        <Link to="/">Go home</Link>.
    </p>
</Post>;

export default NotFoundPage;
