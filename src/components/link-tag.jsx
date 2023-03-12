import { A } from "../features/ui";
import { search } from "../utils/search.js";

export const LinkTag = ({tag}) => {
    const href = search(['tag', tag]);
    return <A href={href} rel="tag" data-pagefind-filter="tag">{tag}</A>;
};

export default LinkTag;
