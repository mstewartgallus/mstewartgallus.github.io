import { Footer, Nav, H2, Menubar, MenuA, Subheading, Section, SubtleA, Theme } from "@features/ui";
import { ViewportPage } from "@features/page";
import { ScreenOnly } from "@features/util";
import { Comments } from "./comments.jsx";
import { ListNotice } from "./list-notice";
import { Metadata } from "./metadata";
import { PostBreadcrumbs } from "./post-breadcrumbs.jsx";
import { PostPaging } from "./post-paging.jsx";

const Notice = ({notice}) =>
      notice && notice.length > 0 && <ListNotice notice={notice} />;

const Skip = () =>
<Menubar>
    <MenuA href="#content" aria-describedby="content">Content</MenuA>
    <MenuA href="#metadata">Metadata</MenuA>
    <MenuA href="#paging">Paging</MenuA>
    <MenuA href="#breadcrumbs">Breadcrumbs</MenuA>
</Menubar>;

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
                           <Nav heading={
                                    <H2>
                                        <SubtleA id="paging" href="#paging">
                                            Paging
                                        </SubtleA>
                                    </H2>
                                }>
                               <PostPaging childrenLink={childrenLink} />
                           </Nav>
                       </ScreenOnly>
                   }
                   menubar={<Skip />}
                   breadcrumbs={<PostBreadcrumbs category={category} title={title} />}
                   support={
                       <Footer heading={
                                   <H2>
                                       <SubtleA id="metadata" href="#metadata">
                                           Metadata
                                       </SubtleA>
                                   </H2
                                    >}>
                           {
                               <Metadata {...post} />
                           }
                       </Footer>
                   }
                   mainbar={
                       comments &&
                           <Section heading={
                                        <H2>
                                            <SubtleA id="comments" href="#comments">Comments</SubtleA>
                                        </H2>
                                    }>
                               <Comments host={comments.host} id={comments.id} />
                           </Section>
                   }
               >
                   {children}
               </ViewportPage>
           </Theme>;
};
