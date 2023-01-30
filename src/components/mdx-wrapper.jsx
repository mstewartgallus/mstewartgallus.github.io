import * as React from "react";
import PostMDX from "./post-mdx.jsx";

export const MDXWrapper = ({
    children,
    data: {
        allLink,
        post: {
            metadata
        }
    }
}) => {
    const group = allLink.group.map(({label,
                                      nodes: [{ previous, next}]}) =>
        ({
            label,
            previous: previous?.post?.metadata,
            next: next?.post?.metadata
        }));
    // FIXME... do only one previous/next for now
    const { previous, next } = group[0];
    return <PostMDX previous={previous} next={next} metadata={metadata}>
               {children}
           </PostMDX>;
};

export default MDXWrapper;
