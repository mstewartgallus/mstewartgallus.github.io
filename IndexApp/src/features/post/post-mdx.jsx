import { MDXProvider } from "@mdx-js/react";
import { theme } from "@features/mdx";

export const PostMdx = ({ children }) =>
<MDXProvider components={theme}>
    {children}
</MDXProvider>;
