import { useBlog } from "./use-blog.js";
import { useMdxComponents } from "./use-mdx-components.js";

export const PostMdx = ({
    post: { category },
    sourceInstanceName,
    relativePath
}) => {
    const components = useMdxComponents(category);
    const Blog = useBlog(sourceInstanceName, relativePath);
    return <Blog components={components} />;
};

export default PostMdx;
