import { lazy, Suspense } from "react";
import { Footer, Nav, H2A, Subheading } from "@features/ui";
import { ViewportPage } from "@features/page";
import { ScreenOnly } from "@features/util";
import { ListNotice } from "./list-notice";
import { Metadata } from "./metadata";
import { PostBreadcrumbs } from "./post-breadcrumbs.jsx";
import { PostPaging } from "./post-paging.jsx";

const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

const PostComments = lazy(() => import("./post-comments.jsx"));

export const PostPage = ({post, children}) => {
    const { comments, notice,
            category, subtitle, title, childrenLink
          } = post;
    return <ViewportPage
               heading={title}
               subheading={
                   <Subheading>{subtitle}</Subheading>
               }
               notice={<Notice notice={notice} />}
               navigation={
                   <ScreenOnly>
                       <Nav heading={
                                <H2A id="paging">
                                    Paging
                                </H2A>
                            }>
                           <PostPaging childrenLink={childrenLink} />
                       </Nav>
                   </ScreenOnly>
               }
               breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
               support={
                   <Footer heading={
                               <H2A id="metadata">
                                   Metadata
                               </H2A>
                           }>
                       <Metadata {...post} />
                   </Footer>
               }
               mainbar={
                   comments &&
                       <Suspense>
                           <PostComments {...comments} />
                       </Suspense>
               }
           >
               {children}
           </ViewportPage>;
};
