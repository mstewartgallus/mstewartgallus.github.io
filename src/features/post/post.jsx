import { PostPoem } from "./post-poem.jsx";
import { PostMdx } from "./post-mdx.jsx";

export const Post = ({ post, postPoem, postMdx }) => {
    switch (true) {
    case !!postMdx:
        return <PostMdx post={post} {...postMdx} />;
    case !!postPoem:
        return <PostPoem post={post} poem={postPoem.poem} />;
    default:
        throw new Error("neither postMdx or postPoem");
    }
}
