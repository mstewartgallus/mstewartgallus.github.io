import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Caesura from "./caesura.jsx";
import Green from "./green.jsx";
import { H1, H2, H3, H4, H5, H6 } from "./heading.jsx";
import L from "./l.jsx";
import Lg from "./lg.jsx";
import Post from "./post.jsx";

const shortcodes = {
    Green,
    Lg, L, Caesura,
    H1, H2, H3, H4, H5, H6
};
const poem = { ul: Lg, li: L };
const autolinkHeadings = { h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };

const defaultComponents = { ...shortcodes, ...autolinkHeadings };

const categoryComponents = {
    "Poem": { ...defaultComponents, ...poem },
    "Prose": defaultComponents,
    "Web": defaultComponents
};

export const PostMDX = ({
    children,
    previous,
    next,
    metadata
}) =>
<Post previous={previous} next={next} metadata={metadata}>
    <MDXProvider components={categoryComponents[metadata.category]}>
        {children}
    </MDXProvider>
</Post>;

export default PostMDX;
