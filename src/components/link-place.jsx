import { A } from "../features/ui";
import { search } from "../utils/search.js";

export const LinkPlace = ({place}) => {
    const href = search(['place', place]);
    return <A href={href}
              rel="tag"
              data-pagefind-filter="place">{place}</A>;
};

export default LinkPlace;
