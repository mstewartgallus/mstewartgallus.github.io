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
import useMdxComponents from "../hooks/use-mdx-components.js";

const author = {
    name: "Molossus Spondee",
    url: "/about/"
};

const pagingOfLinks = links =>
      Object.fromEntries(links.map(({
          index,
          previous, next
      }) => [index.label, {
          previous: previous?.post?.metadata,
          next: next?.post?.metadata
      }]));

const Provider = ({ children, category }) => {
    const components = useMdxComponents(category);
    return <MDXProvider components={components}>{children}</MDXProvider>;
};

const Content = ({ children, __typename, metadata, poem }) => {
    switch (__typename) {
    case "PostPoem":
        return <Poem poem={poem.content} />;

    case "PostMdx":
        return <Provider category={metadata.category}>{children}</Provider>;

    default:
        throw new Error(`unknown type ${__typename}`);
    }
};

export const Head = ({ data: { post: { metadata } } }) => {
    const { description, title, slug } = metadata;
    const url = useAbsolute(slug);
    return <>
               <HeadBasic/>
               <Title>{title}</Title>
               <SeoBasic description={description} title={title} url={url} />
               <SeoPostHead author={author} {...metadata} />
           </>;
};

const BlogPost = ({ children, data: { post } }) =>  {
    let { childrenLink, metadata } = post;

    metadata = { author, ...metadata };

    const breadcrumbList = useBreadcrumbList(metadata);
    const blogPosting = useBlogPosting(metadata);

    const paging = pagingOfLinks(childrenLink);
    const { category, title, subtitle, notice } = metadata;

    return <>
               <Post
                   heading={<>
                                <h1>{title}</h1>
                                <p>{subtitle}</p>
                            </>}
                   notice={<ListNotice notice={notice} />}
                   sidebar={
                       <>
                           <Nav heading={<h2>Paging</h2>}>
                               <Paging {...paging.ALL} />
                           </Nav>
                           <Footer heading={<h2>Metadata</h2>}>
                               <Metadata {...metadata} />
                           </Footer>
                           <Nav heading={<h2>Breadcrumbs</h2>}>
                               <BreadcrumbList>
                                   <li><Link to="/">Home</Link></li>
                                   <li><LinkCategory rel="tag" category={category} /></li>
                                   <li aria-current="page"><cite>{title}</cite></li>
                               </BreadcrumbList>
                           </Nav>
                       </>
                   }>
                   <Content {...post}>{children}</Content>
               </Post>
               <JsonLd srcdoc={breadcrumbList} />
               <JsonLd srcdoc={blogPosting} />
           </>;
};

export default BlogPost;

export const pageQuery = graphql`
query BlogById($id: String!) {
  post(id: {eq: $id}) {
    __typename
    childrenLink {
      index {
        label
      }
      previous {
        post {
          metadata {
            slug
            title
          }
        }
      }
      next {
        post {
          metadata {
            slug
            title
          }
        }
      }
    }
    ... on PostPoem {
      poem {
        content
      }
    }
    metadata {
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
    }
  }
}`;
