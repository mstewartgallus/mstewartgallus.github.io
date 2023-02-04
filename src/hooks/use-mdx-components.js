import Caesura from "../components/caesura.jsx";
import Green from "../components/green.jsx";
import { H1, H2, H3, H4, H5, H6 } from "../components/heading.jsx";
import L from "../components/l.jsx";
import Lg from "../components/lg.jsx";

const shortcodes = {
    Green,
    Lg, L, Caesura,
    H1, H2, H3, H4, H5, H6
};
const poem = { ul: Lg, li: L };
const autolinkHeadings = { h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };

const defaultComponents = { ...shortcodes, ...autolinkHeadings };
const poemComponents = { ...defaultComponents, ...poem };

export const useMdxComponents = category => {
    switch (category) {
    case "Poem":
        return poemComponents;

    case "Prose":
    case "Web":
        return defaultComponents;

    default:
        throw new Error(`Unrecognized category ${category}`);
    }
};

export default useMdxComponents;
