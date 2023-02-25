import A from "./a.jsx";
import { search } from "../utils/search.js";

export const LinkCategory = ({category}) => {
    const href = search(['category', category]);
    return <A href={href}
                 rel="tag"
                 data-pagefind-filter="category">{category}</A>;
};

export default LinkCategory;
