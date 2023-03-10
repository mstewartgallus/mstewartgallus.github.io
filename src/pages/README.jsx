import Readme from "../../content/meta/README.mdx";
import A from "../components/a.tsx";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Nav from "../components/nav.jsx";
import Page from "../components/page.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "About this Blog";

const Sidebar = () =>
      <>
          <Nav heading={<h2>Breadcrumbs</h2>}>
              <BreadcrumbList>
                  <li><A href="/">Home</A></li>
                  <li aria-current="page"><cite>{title}</cite></li>
              </BreadcrumbList>
          </Nav>
      </>;

export const Head = () => {
    const url = useAbsolute("/README");
    return <>
               <HeadBasic />
               <SeoBasic url={url} title={title} />
               <Title>{title}</Title>
           </>;
};

const ReadmePage = () =>
<Page
    heading={<h1 tabIndex="-1">{title}</h1>}
    sidebar={<Sidebar />}>
    <Readme />
</Page>;

export default ReadmePage;
