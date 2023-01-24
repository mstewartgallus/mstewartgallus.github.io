import * as React from "react";
import Post from "./post.jsx";
import Poem from "./poem.jsx";

export const PostPoem = ({ children, next, previous, metadata }) =>
<Post previous={previous} next={next} metadata={metadata}>
    <Poem>{children}</Poem>
</Post>;

export default PostPoem;
