import { graphql } from "gatsby";
import { Card, H1, H2, Section, Viewport } from "../features/ui";
import { Comments, ListNotice, Sidebar, SeoPostHead,
         Post, PostPaging, Metadata, PostBreadcrumbs,
         useBlogPosting, useBreadcrumbList } from "../features/post";
import { Page } from "../features/layout";
import HeadBasic from "../components/head-basic.jsx";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";

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

export const Head = ({ data: { post } }) => {
    const { description, title, slug } = post;
    const url = useAbsolute(slug);
    return <>
               <HeadBasic/>
               <Title>{title}</Title>
               <SeoBasic description={description} title={title} url={url} />
               <SeoPostHead {...post} />
           </>;
};

const PostPage = ({ data }) => {
    const { post } = data;
    const { comments, notice,
            category, subtitle, title, childrenLink
          } = post;
    return <>
               <Viewport>
                   <Page
                       sidebar={<Sidebar
                                    paging={<PostPaging childrenLink={childrenLink} />}
                                    metadata={<Metadata {...post} />}
                                />}
                       breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
                       heading={
                           <>
                               <H1>{title}</H1>
                               <p style={{marginBlock: 0}}>{subtitle}</p>
                           </>
                       }
                       notice={<Notice notice={notice} />}
                       mainbar={
                           comments &&
                               <Card>
                                   <Section heading={<H2>Comments</H2>}>
                                       <Comments host={comments.host} id={comments.id} />
                                   </Section>
                               </Card>
                       }
                   >
                       <Post {...data} />
                   </Page>
               </Viewport>
               <Foot {...post} />
           </>;
};

export default PostPage;

export const pageQuery = graphql`
query PostById($id: String!) {
  postMdx(post:{id: {eq:$id}}) {
    sourceInstanceName
    relativePath
  }
  postPoem(post:{id: {eq:$id}}) {
    poem {
      content
    }
  }
  post(id: {eq: $id}) {
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
`;
