import * as React from "react";
import Post from "./post.jsx";
import Poem from "./poem.jsx";

export const PostPoem = ({ poem, next, previous, metadata }) =>
<Post previous={previous} next={next} metadata={metadata}>
    <Poem poem={poem} />
</Post>;

export default PostPoem;
