import { A, Ul, Li, H2, Card, Section } from "@features/ui";
import { ViewportPage, SkipA } from "@features/page";
import { Comments } from "./comments.jsx";
import { ListNotice } from "./list-notice";
import { Metadata } from "./metadata";
import { PostBreadcrumbs } from "./post-breadcrumbs.jsx";
import { PostPaging } from "./post-paging.jsx";
import { Sidebar } from "./sidebar";

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

export const PostPage = ({post, children}) => {
    const { comments, notice,
            category, subtitle, title, childrenLink
          } = post;
    return <ViewportPage
               heading={title}
               subheading={
                   <p style={{marginBlock: 0}}>{subtitle}</p>
               }
               notice={<Notice notice={notice} />}
               tableOfContents={
                   <TableOfContents title={title} />
               }
               breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
               sidebar={<Sidebar
                            paging={<PostPaging childrenLink={childrenLink} />}
                            metadata={<Metadata {...post} />}
                        />}
               mainbar={
                   comments &&
                       <Card>
                           <Section heading={<H2 id="comments">Comments</H2>}>
                               <Comments host={comments.host} id={comments.id} />
                           </Section>
                       </Card>
               }
           >
               {children}
           </ViewportPage>;
};

export default PostPage;