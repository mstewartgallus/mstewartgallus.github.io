import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Caesura } from "../components/caesura.jsx";
import Green from "../components/green.jsx";
import { H1, H2, H3, H4, H5, H6 } from "../components/heading.jsx";
import L from "../components/l.jsx";
import Lg from "../components/lg.jsx";
import { useCategory } from "./category.jsx";

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

export const MDXWrapper = ({children, ...props}) => {
    const category = useCategory();
    const components = categoryComponents[category];
    return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXWrapper;
