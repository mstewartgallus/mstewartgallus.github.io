import * as React from "react";

// eslint-disable-next-line
const blogs = GATSBY_MDX_PATHS;

const importBlog = blog =>
      import(/* webpackMode: "eager" */ `../../blog/${blog}.mdx`);

const blogMap = Object.fromEntries(
    await Promise.all(blogs.map(async blog =>
        [blog, (await importBlog(blog)).default]
    ))
);

const useBlog = blog => {
    const Lazy = React.useMemo(() => {
        const Component = React.lazy(() => importBlog(blog), [blog]);

        const Lazy = ({children, ...props}) =>
        <React.Suspense fallback="loading...">
            <Component {...props}>{children}</Component>
        </React.Suspense>;

        return Lazy;
    }, [blog]);
    return blogMap[blog] ?? Lazy;
};

export const PostMdx = ({blog}) => {
    const Component = useBlog(blog);
    return <Component />;
};

export default PostMdx;
