import { H2, Card, Section } from "@features/ui";
import { ViewportPage, Outline, OutlineItem } from "@features/page";
import { Comments } from "./comments.jsx";
import { ListNotice } from "./list-notice";
import { Metadata } from "./metadata";
import { PostBreadcrumbs } from "./post-breadcrumbs.jsx";
import { PostPaging } from "./post-paging.jsx";
import { Sidebar } from "./sidebar";

const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

const TableOfContents = ({ title,  headings = [] }) =>
<Outline>
    <OutlineItem href="#content">{title}</OutlineItem>
    {
        headings.map(({url, title}) =>
            <OutlineItem key={url} href={url}>{title}</OutlineItem>)
    }
    <OutlineItem href="#paging">Paging</OutlineItem>
    <OutlineItem href="#metadata">Metadata</OutlineItem>
    <OutlineItem href="#breadcrumbs">Breadcrumbs</OutlineItem>
</Outline>;

export const PostPage = ({post, headings, children}) => {
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
                   <TableOfContents title={title} headings={headings} />
               }
               breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
               sidebar={<Sidebar
                            paging={<PostPaging childrenLink={childrenLink} />}
                            metadata={<Metadata {...post} />}
                        />}
               mainbar={
                   comments &&
                       <Card>
                           <Section heading={<H2 tabIndex="-1" id="comments">Comments</H2>}>
                               <Comments host={comments.host} id={comments.id} />
                           </Section>
                       </Card>
               }
           >
               {children}
           </ViewportPage>;
};

export default PostPage;
