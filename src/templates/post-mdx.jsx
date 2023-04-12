import { graphql } from "gatsby";
import { PostHead, PostPage, PostMdx } from "@features/post";

export const Head = ({ data: { postMdx: { post }}}) => <PostHead post={post} />;

const PostMdxPage = ({ children, data: { postMdx } }) => {
    const { post, mdx } = postMdx;
    return <PostPage post={post} headings={mdx.tableOfContents.items}>
               <PostMdx {...postMdx}>
                   {children}
               </PostMdx>
           </PostPage>;
};

export default PostMdxPage;

export const pageQuery = graphql`
query PostMdxById($id: String!) {
  postMdx(id: {eq:$id}) {
    sourceInstanceName
    relativePath
    mdx {
      tableOfContents(maxDepth: 2)
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
    author {
      name
      url
    }
    comments {
      host
      id
    }
    childrenLink {
      category
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
