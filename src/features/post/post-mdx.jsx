import { MDXProvider } from '@mdx-js/react';
import { useMdxComponents } from "./use-mdx-components.js";

export const PostMdx = ({
    children,
    post: { category }
}) => {
    const components = useMdxComponents(category);
    return <MDXProvider components={components}>
               {children}
           </MDXProvider>;
};

export default PostMdx;
