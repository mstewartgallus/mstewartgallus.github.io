import { Footer, Nav, H2, Subheading, Section, Theme } from "@features/ui";
import { ViewportPage } from "@features/page";
import { ScreenOnly } from "@features/util";
import { Comments } from "./comments.jsx";
import { ListNotice } from "./list-notice";
import { Metadata } from "./metadata";
import { PostBreadcrumbs } from "./post-breadcrumbs.jsx";
import { PostPaging } from "./post-paging.jsx";

const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

export const PostPage = ({post, children}) => {
    const { comments, notice,
            category, subtitle, title, childrenLink
          } = post;
    return <Theme>
               <ViewportPage
                   heading={title}
                   subheading={
                       <Subheading>{subtitle}</Subheading>
                   }
                   notice={<Notice notice={notice} />}
                   navigation={
                       <ScreenOnly>
                           <Nav heading={<H2>Paging</H2>}>
                               <PostPaging childrenLink={childrenLink} />
                           </Nav>
                       </ScreenOnly>
                   }
                   breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
                   support={
                       <Footer heading={<H2>Metadata</H2>}>
                           {<Metadata {...post} />}
                       </Footer>
                   }
                   mainbar={
                       comments &&
                           <Section heading={<H2>Comments</H2>}>
                               <Comments host={comments.host} id={comments.id} />
                           </Section>
                   }
               >
                   {children}
               </ViewportPage>
           </Theme>;
};
