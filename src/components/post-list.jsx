import * as React from "react";
import { Link } from "gatsby";
import { usePostList } from "../hooks/use-post-list.js";

export const PostList = () => {
    const posts = usePostList();
    return posts && posts.length > 0 &&
        <ol reversed>
            {posts.map(({ slug, title }) =>
                <li key={slug}>
                    <Link to={slug}>{title}</Link>
                </li>)}
        </ol>
};

export default PostList;
