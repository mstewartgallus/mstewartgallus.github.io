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
    const Component =  blogMap[blog];
    if (Component) {
        return Component;
    }
    throw new Error(`${blog} not cached`);
};

export const PostMdx = ({blog}) => {
    const Component = useBlog(blog);
    return <Component />;
};

export default PostMdx;
