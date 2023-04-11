import { theme } from "@features/mdx";
import { Caesura, L, Lg } from "@features/poem";
import {
    Cite,
    Green
} from "@features/ui";

// FIXME explicitly import shortcodes
const shortcodes = {
    Cite,
    Green,
    Lg, L, Caesura
};

const poemTheme = {
    ...theme,
    ul: Lg,
    li: L
};

export const useMdxComponents = category => {
    switch (category) {
    case "Poem":
        return { ...poemTheme, ...shortcodes };

    case "Prose":
    case "Web":
        return { ...theme, ...shortcodes };

    default:
        throw new Error(`Unrecognized category ${category}`);
    }
};

export default useMdxComponents;
