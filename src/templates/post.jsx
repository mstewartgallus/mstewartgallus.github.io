import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import BreadcrumbList from "../components/breadcrumb-list.jsx";
import Footer from "../components/footer.jsx";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import LinkCategory from "../components/link-category.jsx";
import ListNotice from "../components/list-notice.jsx";
import Metadata from "../components/metadata.jsx";
import Nav from "../components/nav.jsx";
import Paging from "../components/paging.jsx";
import Poem from "../components/poem.jsx";
import Post from "../components/post.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import SeoPostHead from "../components/seo-post-head.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useBlogPosting from "../hooks/use-blog-posting.js";
import useBreadcrumbList from "../hooks/use-breadcrumb-list.js";
import useIndexAll from "../hooks/use-index-all.js";
import useMdxComponents from "../hooks/use-mdx-components.js";

const author = {
    name: "Molossus Spondee",
    url: "/about/"
};

const paging = ({
    index: { id: index },
    previous, next
}) => [index, {
    previous: previous?.post,
    next: next?.post
}];

const pagingOfLinks = childrenLink =>
      Object.fromEntries(childrenLink.map(paging));

const Provider = ({ children, category }) => {
    const components = useMdxComponents(category);
    return <MDXProvider components={components}>{children}</MDXProvider>;
};

const Heading = ({title, subtitle}) =>
      <>
          <h1>{title}</h1>
          <p>{subtitle}</p>
      </>;
const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

const BlogPost = ({ children, category, childPostPoem}) => {
    if (childPostPoem) {
        return <Poem poem={childPostPoem.poem.content} />;
    }
    return <Provider category={category}>{children}</Provider>;
};

const Sidebar = post => {
    const {
        category, title, childrenLink
    } = post;
    const indexAll = useIndexAll();

    const paging = pagingOfLinks(childrenLink);

    return <>
               <Nav heading={<h2>Paging</h2>}>
                   <Paging {...paging[indexAll]} />
               </Nav>
               <Footer heading={<h2>Metadata</h2>}>
                   <Metadata {...post} />
               </Footer>
               <Nav heading={<h2>Breadcrumbs</h2>}>
                   <BreadcrumbList>
                       <li><Link to="/">Home</Link></li>
                       <li><LinkCategory rel="tag" category={category} /></li>
                       <li aria-current="page"><cite>{title}</cite></li>
                   </BreadcrumbList>
               </Nav>
           </>;
};

const Foot = post => {
    const breadcrumbList = useBreadcrumbList(post);
    const blogPosting = useBlogPosting(post);

    return <>
               <JsonLd srcdoc={breadcrumbList} />
               <JsonLd srcdoc={blogPosting} />
           </>;
};

export const Head = ({ data: { post } }) => {
    const { description, title, slug } = post;
    const url = useAbsolute(slug);
    return <>
               <HeadBasic/>
               <Title>{title}</Title>
               <SeoBasic description={description} title={title} url={url} />
               <SeoPostHead author={author} {...post} />
           </>;
};

const PostPage = ({ children, data: { post } }) => {
    post = { author, ...post };

    return <Post
               heading={<Heading {...post} />}
               notice={<Notice notice={post.notice} />}
               sidebar={<Sidebar {...post} />}
               foot={<Foot {...post} />}>
               <BlogPost {...post}>
                   {children}
               </BlogPost>
           </Post>;
};

export default PostPage;

export const pageQuery = graphql`
query BlogById($id: String!) {
  post(id: {eq: $id}) {
    slug
    dateDisplay: date(formatString: "YYYY-MM-DD")
    date: date(formatString: "YYYY-MM-DDTHH:mmZ")
    description
    title
    subtitle
    category
    notice
    tags
    places
    people
    childPostPoem {
      poem {
        content
      }
    }
    childPostMdx {
      id
    }
    childrenLink {
      index {
        id
      }
      next {
        post {
          slug
          title
        }
      }
      previous {
        post {
          slug
          title
        }
      }
    }
  }
}
`;
