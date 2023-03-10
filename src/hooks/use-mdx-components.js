import L from "../components/l.jsx";
import Lg from "../components/lg.jsx";

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
