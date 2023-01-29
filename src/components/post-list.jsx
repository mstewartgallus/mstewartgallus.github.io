import * as React from "react";
import { Link } from "gatsby";

const Posts = ({posts}) =>
      posts.map(({ slug, title }) =>
          <li key={slug}>
              <Link to={slug}>{title}</Link>
          </li>);

export const PostList = ({posts}) =>
posts && posts.length > 0 &&
    <ol reversed>
        <Posts posts={posts} />
    </ol>;

export default PostList;
