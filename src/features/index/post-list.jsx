import { A, Ol, Li } from "../../features/ui";

const Posts = ({posts}) =>
      posts.map(({ slug, title }) =>
          <Li key={slug}>
              <A href={slug}>{title}</A>
          </Li>);

export const PostList = ({posts}) =>
posts && posts.length > 0 &&
    <Ol reversed="reversed">
        <Posts posts={posts} />
    </Ol>;

export default PostList;
