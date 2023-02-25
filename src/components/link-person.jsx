import A from "./a.jsx";
import { search } from "../utils/search.js";

export const LinkPerson = ({person}) => {
    const href = search(['person', person]);
    return <A href={href} rel="tag" data-pagefind-filter="person">{person}</A>;
};

export default LinkPerson;
