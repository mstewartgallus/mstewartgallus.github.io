import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link, graphql } from "gatsby";
import Breadcrumbs from "../components/breadcrumbs.jsx";
import { Caesura } from "../components/caesura.jsx";
import { H1, H2, H3, H4, H5, H6 } from "../components/heading.jsx";
import HeadBasic from "../components/head-basic.jsx";
import Green from "../components/green.jsx";
import L from "../components/l.jsx";
import Lg from "../components/lg.jsx";
import Metadata from "../components/metadata.jsx";
import Page from "../components/page.jsx";
import Paging from "../components/paging.jsx";
import Poem from "../components/poem.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import SeoPostFoot from "../components/seo-post-foot.jsx";
import SeoPostHead from "../components/seo-post-head.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";
import { search } from "../utils/search.js";

const Category = ({category}) => {
    const to = search(['category', category]);
    return <Link to={to}
                     rel="tag"
                     data-pagefind-filter="category">{category}</Link>;
};

const Notice = ({notice}) =>
      notice && notice.length > 0 &&
    <dl>
        <div>
            <dt>Notice</dt>
            {
                notice.map(n => <dd key={n}>{n}</dd>)
            }
        </div>
    </dl>;

const shortcodes = {
    Green,
    Lg, L, Caesura,
    H1, H2, H3, H4, H5, H6
};
const poem = { ul: Lg, li: L };
const autolinkHeadings = { h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };

const defaultComponents = { ...shortcodes, ...autolinkHeadings };

const components = {
    "Poem": { ...defaultComponents, ...poem },
    "Prose": defaultComponents,
    "Web": defaultComponents
};

const Content = ({category, content, children}) => {
    const type = content.__typename;
    switch (type) {
    case 'MdxContent':
        return <MDXProvider components={components[category]}>{children}</MDXProvider>;
    case 'PoemContent':
        return <Poem poem={content.body} />;
    default:
        throw new Error(`unknown type: ${type}`);
    }
};

const author = {
    name: "Molossus Spondee",
    url: "/about/"
};

export const Head = ({ location: {pathname}, data: { post }}) => {
    const {
        title, dateXml, category, tags, places, people
    } = post.metadata;
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic/>
               <Title title={title} />
               <SeoBasic title={title} url={url} />
               <SeoPostHead
                   title={title}
                   date={dateXml}
                   author={author}
                   category={category}
                   tags={tags}
                   people={people}
                   places={places}
               />
           </>;
};

const BlogPost = ({
    children,
    data: {
        post: {
            previous,
            next,
            content,
            metadata: {
                category, dateXml, dateDisplay, title, subtitle,
                notice, tags, places, people
            }
        }
    }
}) => {
    const id = React.useId();

    return <>
               <Page>
                   <main data-pagefind-body aria-describedby={id}>
                       <header>
                           <hgroup>
                               <h1 id={id}>{title}</h1>
                               {
                                   subtitle && <p>{subtitle}</p>
                               }
                           </hgroup>
                           <Notice notice={notice} />
                       </header>
                       <Content category={category} content={content}>
                           {children}
                       </Content>
                   </main>
                   <Sidebar>
                       <Paging
                           previous={previous?.metadata?.title}
                           next={next?.metadata?.title}
                           phref={previous?.metadata?.slug}
                           nhref={next?.metadata?.slug} />
                       <Metadata
                           author={author}
                           dateDisplay={dateDisplay} dateXml={dateXml}
                           tags={tags} places={places} people={people}
                       />
                       <Breadcrumbs>
                           <li><Link to="/">Home</Link></li>
                           <li><Category category={category} /></li>
                           <li aria-current="page"><cite>{title}</cite></li>
                       </Breadcrumbs>
                   </Sidebar>
               </Page>
               <SeoPostFoot
                   title={title}
                   date={dateXml}
                   author={author}
                   category={category}
                   tags={tags}
                   people={people}
                   places={places}
               />
           </>;
};

export default BlogPost;

export const pageQuery = graphql`
query BlogPostById($id: String!) {
  post(id: {eq: $id}) {
    previous {
      metadata {
        title
        slug
      }
    }
    next {
      metadata {
        title
        slug
      }
    }
    metadata {
      dateDisplay: date(formatString: "YYYY-MM-DD")
      dateXml: date(formatString: "YYYY-MM-DDTHH:mmZ")
      title
      subtitle
      category
      notice
      tags
      places
      people
    }
    content {
      __typename
      ... on PoemContent {
         body
      }
    }
  }
}
`;
