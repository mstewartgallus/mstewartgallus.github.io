import * as React from "react";
import { Link } from "gatsby";
import { search } from "../utils/search.js";

export const LinkTag = ({tag}) => {
    const to = search(['tag', tag]);
    return <Link to={to} rel="tag" data-pagefind-filter="tag">{tag}</Link>;
};

export default LinkTag;
