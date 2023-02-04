import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import HeadBasic from "../components/head-basic.jsx";
import Post from "../components/post.jsx";
import Poem from "../components/poem.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import SeoPostFoot from "../components/seo-post-foot.jsx";
import SeoPostHead from "../components/seo-post-head.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
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
    const { childrenLink, metadata } = post;
    return <>
               <Post paging={pagingOfLinks(childrenLink)}
                     metadata={{ author, ...metadata }}>
                   <Content {...post}>{children}</Content>
               </Post>
               <SeoPostFoot author={author} {...metadata} />
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
