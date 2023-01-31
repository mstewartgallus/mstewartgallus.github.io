import * as React from "react";
import { graphql } from "gatsby";
import HeadBasic from "../components/head-basic.jsx";
import Post from "../components/post.jsx";
import Poem from "../components/poem.jsx";
import PostMDX from "../components/post-mdx.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import SeoPostFoot from "../components/seo-post-foot.jsx";
import SeoPostHead from "../components/seo-post-head.jsx";
import Title from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const author = {
    name: "Molossus Spondee",
    url: "/about/"
};

export const Head = ({
    location: {pathname},
    data: {
        post
    }
}) => {
    const { metadata } = post;
    const {
        description, title, dateXml, category, tags, places, people
    } = metadata;
    const url = useAbsolute(pathname);
    return [
        <HeadBasic/>,
        <Title>{title}</Title>,
        <SeoBasic description={description} title={title} url={url} />,
        <SeoPostHead
            title={title}
            date={dateXml}
            author={author}
            category={category}
            tags={tags}
            people={people}
            places={places}
        />];
};

const BlogPost = ({
    children,
    data: { post }
}) => {
    const { childrenLink, metadata, poem } = post;
    const type = post.__typename;

    const paging = Object.fromEntries(childrenLink.map(({
        index: { label },
        previous, next
    }) => [label, {
        previous: previous?.post?.metadata,
        next: next?.post?.metadata
    }]));

    const {
        category, dateXml, title,
        tags, places, people
    } = metadata;

    let Content;
    switch (type) {
    case "PostPoem":
        Content = () => <Poem poem={poem.content} />;
        break;

    case "PostMdx":
        Content = () => <PostMDX category={category}>{children}</PostMDX>;
        break;

    default:
        throw new Error(`unknown type ${type}`);
    }

    return <>
               <Post paging={paging} metadata={metadata}>
                   <Content />
               </Post>
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
      dateDisplay: date(formatString: "YYYY-MM-DD")
      dateXml: date(formatString: "YYYY-MM-DDTHH:mmZ")
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
