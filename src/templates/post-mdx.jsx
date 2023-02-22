import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import ListNotice from "../components/list-notice.jsx";
import PostSidebar from "../components/post-sidebar.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import SeoPostHead from "../components/seo-post-head.jsx";
import Title from "../components/title.jsx";
import createUseIndex from "../hooks/use-index.js";
import useAbsolute from "../hooks/use-absolute.js";
import useBlogPosting from "../hooks/use-blog-posting.js";
import useBreadcrumbList from "../hooks/use-breadcrumb-list.js";
import useMdxComponents from "../hooks/use-mdx-components.js";

const useIndex = await createUseIndex("blog");

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

const useBlog = blog => {
    const Component = useIndex(blog);
    if (Component) {
        return Component;
    }
    throw new Error(`${blog} not cached`);
};

const PostPage = ({ data: { postMdx: { post, path } } }) => {
    post = { author, ...post };

    const components = useMdxComponents(post.category);

    const Blog = useBlog(path);

    return <MDXProvider components={components}>
               <Blog />
           </MDXProvider>;
};

PostPage.Heading = ({ data: { postMdx: { post } } }) => {
    post = { author, ...post };

    return <Heading {...post} />;
};

PostPage.Notice = ({ data: { postMdx: { post } } }) => {
    return <Notice notice={post.notice} />;
};
PostPage.Sidebar = ({ data: { postMdx: { post } } }) => {
    post = { author, ...post };
    return <PostSidebar {...post} />;
};
PostPage.Foot = ({ data: { postMdx: { post } } }) => {
    post = { author, ...post };
    return <Foot {...post} />;
};

export default PostPage;

export const pageQuery = graphql`
query MdxById($id: String!) {
  postMdx(id: {eq: $id}) {
    path
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
