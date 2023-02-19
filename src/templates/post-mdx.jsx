import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import ListNotice from "../components/list-notice.jsx";
import Post from "../components/post.jsx";
import PostSidebar from "../components/post-sidebar.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import SeoPostHead from "../components/seo-post-head.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useBlogPosting from "../hooks/use-blog-posting.js";
import useBreadcrumbList from "../hooks/use-breadcrumb-list.js";
import useMdxComponents from "../hooks/use-mdx-components.js";
import useMdx from "../hooks/use-mdx.js";

const author = {
    name: "Molossus Spondee",
    url: "/about/"
};

const Heading = ({title, subtitle}) =>
      <>
          <h1>{title}</h1>
          <p>{subtitle}</p>
      </>;
const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

const Foot = post => {
    const breadcrumbList = useBreadcrumbList(post);
    const blogPosting = useBlogPosting(post);

    return <>
               <JsonLd srcdoc={breadcrumbList} />
               <JsonLd srcdoc={blogPosting} />
           </>;
};

export const Head = ({ data: { postMdx: { post } } }) => {
    const { description, title, slug } = post;
    const url = useAbsolute(slug);
    return <>
               <HeadBasic/>
               <Title>{title}</Title>
               <SeoBasic description={description} title={title} url={url} />
               <SeoPostHead author={author} {...post} />
           </>;
};

const PostPage = ({ data: { postMdx: { post, mdx } } }) => {
    const { category, notice } = post;

    const components = useMdxComponents(category);

    const Component = useMdx(mdx.id);

    post = { author, ...post };

    return <Post
               heading={<Heading {...post} />}
               notice={<Notice notice={notice} />}
               sidebar={<PostSidebar {...post} />}
               foot={<Foot {...post} />}>
               <MDXProvider components={components}>
                   <Component />
               </MDXProvider>
           </Post>;
};

export default PostPage;

export const pageQuery = graphql`
query MdxById($id: String!) {
  postMdx(id: {eq: $id}) {
    mdx {
      id
    }
    post {
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
}
`;