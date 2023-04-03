import { graphql } from "gatsby";
import { Ul, Li, A, Card, H2, Section } from "../features/ui";
import { Comments, ListNotice, Sidebar, SeoPostHead,
         Post, PostPaging, Metadata, PostBreadcrumbs,
         useBlogPosting, useBreadcrumbList } from "../features/post";
import { PageLayout, SkipA } from "../features/layout";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";

const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

const TableOfContents = ({ title,  headings = [] }) =>
      <>
          <SkipA aria-describedby="content" href="#content">{title}</SkipA>
          <Ul>
              {
                  headings.map(({url, title}) =>
                      <Li key={url}><A href={url}>{title}</A></Li>)
              }
              <Li><A href="#paging">Paging</A></Li>
              <Li><A href="#metadata">Metadata</A></Li>
              <Li><A href="#breadcrumbs">Breadcrumbs</A></Li>
          </Ul>
      </>;

export const Head = ({ data: { post } }) => {
    const { description, title, slug } = post;
    const url = useAbsolute(slug);
    const fulltitle = useTitle(title);
    const breadcrumbList = useBreadcrumbList(post);
    const blogPosting = useBlogPosting(post);
    return <>
               <title>{fulltitle}</title>
               <SeoBasic description={description} title={title} url={url} />
               <SeoPostHead {...post} />
               <JsonLd srcdoc={breadcrumbList} />
               <JsonLd srcdoc={blogPosting} />
           </>;
};

const PostPage = ({ data }) => {
    const { post, postMdx } = data;
    const { comments, notice,
            category, subtitle, title, childrenLink
          } = post;
    const headings = postMdx?.mdx?.tableOfContents?.items;
    return <PageLayout
               tableOfContents={<TableOfContents title={title} headings={headings} />}
               sidebar={<Sidebar
                            paging={<PostPaging childrenLink={childrenLink} />}
                            metadata={<Metadata {...post} />}
                        />}
               breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
               heading={title}
               subheading={
                   <p style={{marginBlock: 0}}>{subtitle}</p>
               }
               notice={<Notice notice={notice} />}
               mainbar={
                   comments &&
                       <Card>
                           <Section heading={<H2 id="comments" tabIndex="-1">Comments</H2>}>
                               <Comments host={comments.host} id={comments.id} />
                           </Section>
                       </Card>
               }
           >
               <Post {...data} />
           </PageLayout>;
};

export default PostPage;

export const pageQuery = graphql`
query PostById($id: String!) {
  postMdx(post:{id: {eq:$id}}) {
    sourceInstanceName
    relativePath
    mdx {
      tableOfContents(maxDepth: 2)
    }
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
