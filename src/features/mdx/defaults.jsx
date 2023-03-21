import { MDXProvider } from '@mdx-js/react';
import { Caesura, L, Lg } from "../../features/poem";
import {
    A,
    Blockquote,
    Code,
    Ul, Ol, Menu, Li,
    Hr,
    P,
    Pre,
    Green
} from "../../features/ui";
import { MdxPage } from "./mdx-page.jsx";
import { H1, H2, H3, H4, H5, H6, } from "./heading";

// Prevent doublying up
const Wrapper = ({children, ...props}) =>
<MdxPage {...props}>
    <MDXProvider components={{ wrapper: null}}>
        {children}
    </MDXProvider>
</MdxPage>;

const shortcodes = {
    A,
    Green,
    Lg, L, Caesura
};

const headings = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6
};
const components = {
    ul: Ul, ol: Ol, menu: Menu, li: Li,
    p: P,
    a: A,
    blockquote: Blockquote,
    code: Code,
    pre: Pre,
    hr: Hr
};

export const defaults = {
    ...shortcodes,
    ...headings,
    ...components,
    wrapper: Wrapper
};

export default defaults;
