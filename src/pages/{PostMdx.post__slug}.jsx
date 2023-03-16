import { graphql } from "gatsby";
import { Card, Main, Page, Section } from "../features/ui";
import { Comments, ListNotice, Sidebar, SeoPostHead,
         useBlog,
         useBlogPosting, useBreadcrumbList, useMdxComponents } from "../features/post";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";

const Heading = ({title, subtitle}) =>
      <>
          <h1>{title}</h1>
          <p style={{marginBlock: 0}}>{subtitle}</p>
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

const PostPage = ({
    data: {
        postMdx: { post,
                   sourceInstanceName,
                   relativePath
                 }
    }
}) => {
    const components = useMdxComponents(post.category);

    const Blog = useBlog(sourceInstanceName, relativePath);

    const { comments, notice } = post;
    return <>
               <Page sidebar={<Sidebar {...post} />}>
                   <Card>
                       <Main heading={<Heading {...post} />}
                             notice={<Notice notice={notice} />}>
                           <Blog components={components} />
                       </Main>
                   </Card>
                   { comments &&
                     <Card>
                         <Section heading={<h2>Comments</h2>}>
                             <Comments host={comments.host} id={comments.id} />
                         </Section>
                     </Card>
                   }
               </Page>
               <Foot {...post} />
           </>;
};

export default PostPage;

export const pageQuery = graphql`
query MdxById($id: String!) {
  postMdx(id: {eq: $id}) {
    sourceInstanceName
    relativePath
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
