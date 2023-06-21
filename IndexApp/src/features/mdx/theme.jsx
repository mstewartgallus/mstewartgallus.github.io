import {
    Blockquote,
    Code,
    Ul, Ol, Menu, Li,
    Hr,
    P
} from "@features/ui";
import { A } from "./a";
import { H1, H2, H3, H4, H5, H6, } from "./heading";
import { Pre } from "./pre";

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

export const theme = {
    ...headings,
    ...components
};
