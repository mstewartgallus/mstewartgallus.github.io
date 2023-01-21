import * as React from "react";
import { Link } from "gatsby";
import Breadcrumbs from "../components/breadcrumbs.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Page from "../components/page.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Sidebar from "../components/sidebar.jsx";
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

const Content = () =>
      <>
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
      </>;

const AboutPage = () => {
    const id = React.useId();
    return <Page>
               <main aria-describedby={id}>
                   <header>
                       <hgroup>
                           <h1 id={id}>About the Author</h1>
                       </hgroup>
                   </header>

                   <Content />
               </main>
               <Sidebar>
                   <Breadcrumbs>
                       <li><Link to="/">Home</Link></li>
                       <li aria-current="page"><cite>About the Author</cite></li>
                   </Breadcrumbs>
               </Sidebar>
           </Page>;
};

export default AboutPage;
