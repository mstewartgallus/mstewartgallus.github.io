import * as React from "react";
import blogMap from "./mdx-imports.js";

const importBlog = blog => import(`../../blog/${blog}.mdx`);

const createLazyBlog = blog => {
    const Component = React.lazy(() => importBlog(blog));

    const Lazy = ({children, ...props}) =>
    <React.Suspense fallback="loading...">
        <Component {...props}>{children}</Component>
    </React.Suspense>;

    return Lazy;
};

const useBlog = blog => {
    const Lazy = React.useMemo(() => createLazyBlog(blog), [blog]);
    return blogMap[blog] ?? Lazy;
};

export const PostMdx = ({blog}) => {
    const Component = useBlog(blog);
    return <Component />;
};

export default PostMdx;
