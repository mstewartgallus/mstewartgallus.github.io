import { A } from "../../features/ui";
import { useSearchURL } from "../../features/route";

export const LinkPerson = ({person}) => {
    const href = useSearchURL({ person: [person] });
    return <A href={href} rel="tag" data-pagefind-filter="person">{person}</A>;
};

export default LinkPerson;
