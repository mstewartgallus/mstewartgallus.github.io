import { H2, Subheading, Section } from "@features/ui";
import { ViewportPage, SkipA } from "@features/page";
import { Comments } from "./comments.jsx";
import { ListNotice } from "./list-notice";
import { Metadata } from "./metadata";
import { PostBreadcrumbs } from "./post-breadcrumbs.jsx";
import { PostPaging } from "./post-paging.jsx";
import { Sidebar } from "./sidebar";

const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

export const PostPage = ({post, children}) => {
    const { comments, notice,
            category, subtitle, title, childrenLink
          } = post;
    return <ViewportPage
               skipA={<SkipA>{title}</SkipA>}
               heading={title}
               subheading={
                   <Subheading>{subtitle}</Subheading>
               }
               notice={<Notice notice={notice} />}
               breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
               sidebar={<Sidebar
                            paging={<PostPaging childrenLink={childrenLink} />}
                            metadata={<Metadata {...post} />}
                        />}
               mainbar={
                   comments &&
                       <Section heading={<H2 tabIndex="-1" id="comments">Comments</H2>}>
                           <Comments host={comments.host} id={comments.id} />
                       </Section>
               }
           >
               {children}
           </ViewportPage>;
};
