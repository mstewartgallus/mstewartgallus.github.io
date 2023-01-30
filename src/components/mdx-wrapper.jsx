import * as React from "react";
import PostMDX from "./post-mdx.jsx";

export const MDXWrapper = ({
    children,
    data: {
        post: {
            previous,
            next,
            metadata
        }
    }
}) => {
    return <PostMDX previous={previous?.metadata} next={next?.metadata}
                    metadata={metadata}>
               {children}
           </PostMDX>;
};

export default MDXWrapper;
