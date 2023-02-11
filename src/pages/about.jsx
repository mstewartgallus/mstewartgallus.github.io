import * as React from "react";
import { Link } from "gatsby";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Nav from "../components/nav.jsx";
import Post from "../components/post.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "About the Author";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic />
               <SeoBasic url={url} title={title} />
               <Title>{title}</Title>
           </>;
};

const AboutPage = () =>
      <dialog open="open">
<Post heading={<h1>About the Author</h1>}
      sidebar={
          <>
              <Nav heading={<h2>Breadcrumbs</h2>}>
                  <BreadcrumbList>
                      <li><Link to="/">Home</Link></li>
                      <li aria-current="page"><cite>About the Author</cite></li>
                  </BreadcrumbList>
              </Nav>
          </>
      }
>
    <p>My pen name is <span role="presentation" translate="no">Molossus Spondee</span>.
    This is my personal blog mostly for posting silly poetry. </p>

    <dl>
        <div><dt>About the Author</dt><dd>Molossus Spondee</dd></div>
        <div>
            <dt><a href="mailto:molossusspondee@gmail.com">Email</a></dt>
            <dd>molossusspondee@gmail.com</dd>
        </div>
        <div>
            <dt><a rel="me" href="https://mastodon.lol/@MSpondee">Mastodon</a></dt>
            <dd>@MSpondee@mastodon.lol</dd>
        </div>
        <div>
            <dt><a href="https://twitter.com/MSpondee">Twitter</a></dt>
            <dd>@MSpondee</dd>
        </div>
        <div>
            <dt><a href="https://github.com/mstewartgallus">GitHub</a></dt>
            <dd>mstewartgallus</dd>
        </div>
        <div>
            <dt><a href="https://www.linkedin.com/in/mstewartgallus">LinkedIn</a></dt>
            <dd>mstewartgallus</dd>
        </div>
    </dl>
</Post>
      </dialog>;

export default AboutPage;
