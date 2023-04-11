import { theme } from "@features/mdx";
import { Caesura, L, Lg } from "@features/poem";

// FIXME explicitly import themes?

const poemTheme = {
    ...theme,
    ul: Lg,
    li: L,
    // FIXME explicitly import shortcodes ?
    Caesura
};

export const useMdxComponents = category => {
    switch (category) {
    case "Poem":
        return poemTheme;

    case "Prose":
    case "Web":
        return theme;

    default:
        throw new Error(`Unrecognized category ${category}`);
    }
};

export default useMdxComponents;
