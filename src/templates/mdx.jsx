import * as React from "react";
import { graphql } from "gatsby";
import HeadBasic from "../components/head-basic.jsx";
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
    data: { postMdx: { post: { metadata }} }
}) => {
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
    data: {
        allLink,
        postMdx: {
            post: { metadata }
        }
    }
}) => {
    const group = allLink.group.map(({label,
                                      nodes: [{ previous, next}]}) =>
        ({
            label,
            previous: previous?.post?.metadata,
            next: next?.post?.metadata
        }));
    // FIXME... do only one previous/next for now
    const { previous, next } = group[0];

    const {
        category, dateXml, title,
        tags, places, people
    } = metadata;

    // FIXME pull out of MDX
    return <>
               <PostMDX previous={previous} next={next} metadata={metadata}>
                   {children}
               </PostMDX>;
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
query BlogPostById($id: String!, $post: String!) {
  allLink(sort: {date: DESC}, filter: {post: {id: {eq: $post}}}) {
    group(field: {index: {label: SELECT}}) {
      label: fieldValue
      nodes {
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
    }
  }
  postMdx(id: {eq: $id}) {
    post {
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
  }
}
`;
