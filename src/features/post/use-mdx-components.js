import { defaults } from "../../features/mdx";
import { L, Lg } from "../../features/poem";

const poem = { ul: Lg, li: L };

export const useMdxComponents = category => {
    switch (category) {
    case "Poem":
        return { ...defaults, ...poem, wrapper: null };

    case "Prose":
    case "Web":
        return { ...defaults, wrapper: null };

    default:
        throw new Error(`Unrecognized category ${category}`);
    }
};

export default useMdxComponents;
