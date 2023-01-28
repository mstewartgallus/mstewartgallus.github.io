import * as React from "react";
import { Link } from "gatsby";
import { search } from "../utils/search.js";

export const LinkCategory = ({category}) => {
    const to = search(['category', category]);
    return <Link to={to}
                     rel="tag"
                     data-pagefind-filter="category">{category}</Link>;
};

export default LinkCategory;
