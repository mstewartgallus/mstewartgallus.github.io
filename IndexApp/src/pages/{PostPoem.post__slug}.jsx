import { graphql } from "gatsby";
import { PostHead, PostPage, PostPoem } from "@features/post";

export const Head = ({ data: { postPoem: { post }}}) => <PostHead post={post} />;

const PostPoemPage = ({ data: { postPoem } }) => {
    const { post, poem } = postPoem;
    return <PostPage post={post}>
               <PostPoem post={post} poem={poem} />
           </PostPage>;
};

export default PostPoemPage;

export const pageQuery = graphql`
query PostPoemById($id: String!) {
  postPoem(id: {eq:$id}) {
    poem {
      content
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
