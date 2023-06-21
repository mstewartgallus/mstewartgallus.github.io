import { BlockA, ClickTrap, Ol, Li } from "@features/ui";

const Entry = ({href, children}) =>
<Li>
    <BlockA href={href}>
        {children}
        <ClickTrap />
    </BlockA>
</Li>;

const Posts = ({posts}) => posts.map(({ slug, title }) =>
    <Entry key={slug} href={slug}>{title}</Entry>
);

export const PostList = ({posts}) =>
posts && posts.length > 0 &&
    <Ol reversed="reversed" start={posts.length}>
        <Posts posts={posts} />
    </Ol>;
