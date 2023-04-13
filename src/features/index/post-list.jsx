import { A, Ol, Li } from "@features/ui";

const Entry = ({href, children}) =>
<Li><A href={href}>{children}</A></Li>;

const EntryList = ({children, start}) =>
<Ol reversed="reversed" start={start}>
    {children}
</Ol>;

const Posts = ({posts}) => posts.map(({ slug, title }) =>
    <Entry key={slug} href={slug}>{title}</Entry>
);

export const PostList = ({posts}) =>
posts && posts.length > 0 &&
    <EntryList start={posts.length}>
        <Posts posts={posts} />
    </EntryList>;

export default PostList;
