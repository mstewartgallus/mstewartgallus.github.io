import L from "../components/l";
import Lg from "../components/lg";

const poem = { ul: Lg, li: L };

export const useMdxComponents = category => {
    switch (category) {
    case "Poem":
        return { ...poem, wrapper: null };

    case "Prose":
    case "Web":
        return { wrapper: null };

    default:
        throw new Error(`Unrecognized category ${category}`);
    }
};

export default useMdxComponents;
