import * as React from "react";
import { Link } from "gatsby";
import { search } from "../utils/search.js";

export const LinkPerson = ({person}) => {
    const to = search(['person', person]);
    return <Link to={to} rel="tag" data-pagefind-filter="person">{person}</Link>;
};

export default LinkPerson;
