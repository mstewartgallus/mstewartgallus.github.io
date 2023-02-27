import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import ListNotice from "../components/list-notice.jsx";
import Page from "../components/page.jsx";
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

const Heading = ({title, subtitle}) =>
      <>
          <h1 tabIndex="-1">{title}</h1>
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
               <SeoPostHead {...post} />
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
    const components = useMdxComponents(post.category);

    const Blog = useBlog(path);

    return <>
               <Page
                   heading={<Heading {...post} />}
                   notice={<Notice notice={post.notice} />}
                   sidebar={<PostSidebar {...post} />}
               >
                   <MDXProvider components={components}>
                       <Blog />
                   </MDXProvider>
               </Page>
               <Foot {...post} />
           </>;
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
      author {
        name
        url
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
}
`;
