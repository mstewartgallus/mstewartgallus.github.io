import A from "../components/a.jsx";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Nav from "../components/nav.jsx";
import Page from "../components/page.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "About the Author";

const Sidebar = () =>
      <>
          <Nav heading={<h2>Breadcrumbs</h2>}>
              <BreadcrumbList>
                  <li><A href="/">Home</A></li>
                  <li aria-current="page"><cite>About the Author</cite></li>
              </BreadcrumbList>
          </Nav>
      </>;

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic />
               <SeoBasic url={url} title={title} />
               <Title>{title}</Title>
           </>;
};

const AboutPage = () =>
<Page
    heading={<h1 tabIndex="-1">About the Author</h1>}
    sidebar={<Sidebar />}>
    <p>My pen name is <span role="presentation" translate="no">Molossus Spondee</span>.
    This is my personal blog mostly for posting silly poetry. </p>

    <dl>
        <div><dt>About the Author</dt><dd>Molossus Spondee</dd></div>
        <div>
            <dt><A href="mailto:molossusspondee@gmail.com">Email</A></dt>
            <dd>molossusspondee@gmail.com</dd>
        </div>
        <div>
            <dt><A rel="me" href="https://mastodon.lol/@MSpondee">Mastodon</A></dt>
            <dd>@MSpondee@mastodon.lol</dd>
        </div>
        <div>
            <dt><A href="https://twitter.com/MSpondee">Twitter</A></dt>
            <dd>@MSpondee</dd>
        </div>
        <div>
            <dt><A href="https://github.com/mstewartgallus">GitHub</A></dt>
            <dd>mstewartgallus</dd>
        </div>
        <div>
            <dt><A href="https://www.linkedin.com/in/mstewartgallus">LinkedIn</A></dt>
            <dd>mstewartgallus</dd>
        </div>
    </dl>
</Page>;

export default AboutPage;
