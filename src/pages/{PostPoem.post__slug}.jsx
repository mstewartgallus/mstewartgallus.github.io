import { graphql } from "gatsby";
import { Main, Page } from "../features/ui";
import { Poem } from "../features/poem";
import { ListNotice, Sidebar, SeoPostHead, useBlogPosting } from "../features/post";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useBreadcrumbList from "../hooks/use-breadcrumb-list.js";

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

export const Head = ({ data: { postPoem: { post } } }) => {
    const { description, title, slug } = post;
    const url = useAbsolute(slug);
    return <>
               <HeadBasic/>
               <Title>{title}</Title>
               <SeoBasic description={description} title={title} url={url} />
               <SeoPostHead {...post} />
           </>;
};

const PostPage = ({ data: { postPoem: { post, poem } } }) => {
    const content = poem.content;
    return <>
               <Page sidebar={<Sidebar {...post} />}>
                   <Main
                       heading={<Heading {...post} />}
                       notice={<Notice notice={post.notice} />}>
                       <Poem poem={content} />
                   </Main>
               </Page>
               <Foot {...post} />
           </>;
};

export default PostPage;

export const pageQuery = graphql`
query PoemById($id: String!) {
  postPoem(id: {eq: $id}) {
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
