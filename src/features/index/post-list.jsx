import { A } from "../../features/ui";

const Posts = ({posts}) =>
      posts.map(({ slug, title }) =>
          <li key={slug}>
              <A href={slug}>{title}</A>
          </li>);

export const PostList = ({posts}) =>
posts && posts.length > 0 &&
    <ol reversed>
        <Posts posts={posts} />
    </ol>;

export default PostList;